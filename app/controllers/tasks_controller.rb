class TasksController < ApplicationController
    def index
        allTasks = Task.all
        taskList = Array.new;
        @category = params[:search_category]
        @title = params[:search_title]
        if @title and @title != '' and (@category == 'School' or @category == 'Work' or @category == 'CCA') 
            allTasks.each do |task|
                if task.title.include?(@title)
                    taskTypes = task.task_types
                    taskTypes.each do |taskType|
                        if taskType.category == @category
                            taskList.push(task)
                            break
                        end
                    end
                end
            end
            @tasks = taskList
        elsif @category == 'School' or @category == 'Work' or @category == 'CCA'
            allTasks.each do |task|
                taskTypes = task.task_types
                taskTypes.each do |taskType|
                    if taskType.category == @category
                        taskList.push(task)
                        break
                    end
                end            
            end
            @tasks = taskList
        elsif @title and @title != ''
            allTasks.each do |task|
                if task.title.include?(@title)
                    taskList.push(task)
                end   
            end
            @tasks = taskList
        else
            @tasks = allTasks
        end
    end

    def show
        @task = Task.find(params[:id])
        @task_id = params[:id]
    end

    def new
        @task = Task.new
    end

    def create
        @task = Task.new(task_params)
       
        if @task.save
            redirect_to @task
        else
            @authenticity_token = form_authenticity_token
            render 'validate'
        end
    end

    def edit
        @task = Task.find(params[:id])
    end

    def update
        @task = Task.find(params[:id])
 
        if @task.update(task_params)
            redirect_to @task
        else
            render 'edit'
        end
    end

    def destroy
        @task = Task.find(params[:id])
        @task.destroy
 
        redirect_to tasks_path
    end
       
    private
        def task_params
          params.permit(:title, :description, :time, :location)
        end
end
