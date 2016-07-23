/*
This file doesn't need to be edited, merely used for reference.
 */

function Node(children) {
	this.children = children;
}

function ElementNode(name, attrs, children) {
	Node.call(this, children);
	this.id = function() {
		return attrs.id ? attrs.id : null;
	}
	this.classes = function() {
		return attrs['class'] ? attrs['class'].split(' ') : [];
	}

	this.tagName = name;
	this.attributes = attrs;
}

function TextNode(data) {
	Node.call(this);
	this.text = data;
}
