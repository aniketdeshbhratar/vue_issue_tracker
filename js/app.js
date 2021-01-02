var issueTrackerApp = new Vue({
    el: '#issueTrackerApp',
    data: {
      issueData: [],
    },
    methods:{
      removeTicket : function(issueSelected) {
          this.issueData = this.issueData.filter((issue)=> issue.id !== issueSelected.id);
      }      
    }
  });
  


issueTrackerApp.issueData = [
{
    id: 1,
    issueId: '7134743777217A25432646294A404E63',
    status: 'todo',
    title:'Login Page Validation Update',
    description:'Need to update error validation for login and register pages',
    priority:'medium',
    date:'13/06/2020',
    creator:'William Sample'
},
{
    id: 2,
    issueId: '7134743777217A25432646294A404E63',
    status: 'In Progress',
    title:'Design Empty States',
    description:'Need to update error validation for login and register pages',
    priority:'medium',
    date:'13/06/2020',
    creator:'William Sample'
},
{
    id: 3,
    issueId: '7134743777217A25432646294A404E63',
    status: 'Done',
    title:'New Dashboard Design',
    description:'Need to update error validation for login and register pages',
    priority:'medium',
    date:'13/06/2020',
    creator:'William Sample'
}
]
    