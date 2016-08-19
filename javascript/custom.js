$('a.readMore').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $collapse = $this.closest('.collapse-group').find('.collapse');
    $collapse.collapse('toggle');
    if($this.text() == 'Show More'){
        $this.text('Show Less');
    }else{
        $this.text('Show More');
    }
});

