;(function(window, document) {
	
	function ngshivDocument(ownerDocument) {
        if (!ownerDocument) {
            ownerDocument = document;
        }

        ownerDocument.createElement('ng-include');
        ownerDocument.createElement('ng-pluralize');
        ownerDocument.createElement('ng-view');

        ownerDocument.createElement('ng:include');
        ownerDocument.createElement('ng:pluralize');
        ownerDocument.createElement('ng:view');
        
        ownerDocument.createElement('accordion');
        ownerDocument.createElement('accordion-group');
        ownerDocument.createElement('accordion-heading');
        
        return ownerDocument;
    }
    
    // shiv the document
    ngshivDocument(document);
    
}(this, document));