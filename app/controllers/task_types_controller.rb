class TaskTypesController < ApplicationController
    def create
        @task = Task.find(params[:task_id])
        @task_tpye = @task.task_types.create(task_type_params)
        redirect_to task_path(@task)
    end

    def destroy
        @task = Task.find(params[:task_id])
        @task_type = @task.task_types.find(params[:id])
        @task_type.destroy
        redirect_to task_path(@task)
    end 

    private
        def task_type_params
            params.permit(:category)
        end
end
