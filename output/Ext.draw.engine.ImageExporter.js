Ext.data.JsonP.Ext_draw_engine_ImageExporter({"tagname":"class","name":"Ext.draw.engine.ImageExporter","extends":"Ext.Base","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"code_type":"ext_define","inheritable":false,"inheritdoc":null,"meta":{"docauthor":["译者: 老男孩<liu78778@gmail.com>"],"private":true},"private":true,"id":"class-Ext.draw.engine.ImageExporter","members":{"cfg":[],"property":[{"name":"$onExtended","tagname":"property","owner":"Ext.Base","meta":{"private":true},"id":"property-S-onExtended"},{"name":"self","tagname":"property","owner":"Ext.Base","meta":{"protected":true},"id":"property-self"}],"method":[{"name":"addConfig","tagname":"method","owner":"Ext.Base","meta":{"private":true},"id":"method-addConfig"},{"name":"addInheritableStatics","tagname":"method","owner":"Ext.Base","meta":{"private":true},"id":"method-addInheritableStatics"},{"name":"addMember","tagname":"method","owner":"Ext.Base","meta":{"private":true},"id":"method-addMember"},{"name":"addXtype","tagname":"method","owner":"Ext.Base","meta":{"private":true},"id":"method-addXtype"},{"name":"callOverridden","tagname":"method","owner":"Ext.Base","meta":{"protected":true,"deprecated":{"version":"4.1","text":"版本 使用 {@link #callParent} 代替."}},"id":"method-callOverridden"},{"name":"callParent","tagname":"method","owner":"Ext.Base","meta":{"protected":true},"id":"method-callParent"},{"name":"extend","tagname":"method","owner":"Ext.Base","meta":{"private":true},"id":"method-extend"},{"name":"getConfig","tagname":"method","owner":"Ext.Base","meta":{"private":true},"id":"method-getConfig"},{"name":"getInitialConfig","tagname":"method","owner":"Ext.Base","meta":{"private":true},"id":"method-getInitialConfig"},{"name":"hasConfig","tagname":"method","owner":"Ext.Base","meta":{"private":true},"id":"method-hasConfig"},{"name":"implement","tagname":"method","owner":"Ext.Base","meta":{"private":true},"id":"method-implement"},{"name":"initConfig","tagname":"method","owner":"Ext.Base","meta":{"protected":true},"id":"method-initConfig"},{"name":"mixin","tagname":"method","owner":"Ext.Base","meta":{"private":true},"id":"method-mixin"},{"name":"onConfigUpdate","tagname":"method","owner":"Ext.Base","meta":{"private":true},"id":"method-onConfigUpdate"},{"name":"onExtended","tagname":"method","owner":"Ext.Base","meta":{"private":true},"id":"method-onExtended"},{"name":"setConfig","tagname":"method","owner":"Ext.Base","meta":{"private":true},"id":"method-setConfig"},{"name":"statics","tagname":"method","owner":"Ext.Base","meta":{"protected":true},"id":"method-statics"},{"name":"triggerExtended","tagname":"method","owner":"Ext.Base","meta":{"private":true},"id":"method-triggerExtended"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"ImageExporter.js","href":"ImageExporter.html#Ext-draw-engine-ImageExporter"}],"html_meta":{"docauthor":null,"private":null},"component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><strong>Ext.draw.engine.ImageExporter</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ImageExporter.html#Ext-draw-engine-ImageExporter' target='_blank'>ImageExporter.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-S-onExtended' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-property-S-onExtended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-S-onExtended' class='name expandable'>$onExtended</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>扩展事件 ...</div><div class='long'><p>扩展事件</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-self' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-property-self' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>本身\n\n获取当前类的引用，此对象被实例化。不同于 statics,\nthis.self是依赖范围，它意味着要使用动态继承。 ...</div><div class='long'><p>本身</p>\n\n<p>获取当前类的引用，此对象被实例化。不同于 <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code>是依赖范围，它意味着要使用动态继承。\n参见 <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a> 详细对比</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); // 依赖 'this'\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat' 猫\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard' 雪豹\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addConfig' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-addConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-addConfig' class='name expandable'>addConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>添加配置 ...</div><div class='long'><p>添加配置</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>配置</p>\n</div></li></ul></div></div></div><div id='method-addInheritableStatics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-addInheritableStatics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-addInheritableStatics' class='name expandable'>addInheritableStatics</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> members</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>成员</p>\n</div></li></ul></div></div></div><div id='method-addMember' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-addMember' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-addMember' class='name expandable'>addMember</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> member</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>名称</p>\n</div></li><li><span class='pre'>member</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>成员</p>\n</div></li></ul></div></div></div><div id='method-addXtype' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-addXtype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-addXtype' class='name expandable'>addXtype</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> xtype</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>添加 Xtype ...</div><div class='long'><p>添加 Xtype</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xtype</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-callOverridden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-callOverridden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callOverridden' class='name expandable'>callOverridden</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments </span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='deprecated signature'>deprecated</strong><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>调用原来的方法，这是以前的override重写\n\nExt.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n    }\n});\n...</div><div class='long'><p>调用原来的方法，这是以前的<a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a>重写</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> since 4.1</p>\n        <p>版本 使用 <a href=\"#!/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\">callParent</a> 代替.</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'></span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>参数的参数，数组或'参数'对象\n来自当前方法，例如： <code>this.callOverridden(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>返回调用重写方法的结果。</p>\n</div></li></ul></div></div></div><div id='method-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-callParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callParent' class='name expandable'>callParent</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>所谓的\"parent\"方法是指当前的方法。 ...</div><div class='long'><p>所谓的\"parent\"方法是指当前的方法。\n这是以前的方法派生或重写(参见 <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>)。</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Base', {\n     constructor: function (x) {\n         this.x = x;\n     },\n\n     statics: {\n         method: function (x) {\n             return x;\n         }\n     }\n });\n\n <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived', {\n     extend: 'My.Base',\n\n     constructor: function () {\n         this.callParent([21]);\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // alerts 21\n</code></pre>\n\n<p>这可以用来重写如下:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.DerivedOverride', {\n     override: 'My.Derived',\n\n     constructor: function (x) {\n         this.callParent([x*2]); // 调用原来的My.Derived构造\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // 现在提示 42\n</code></pre>\n\n<p>This also works with static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2', {\n     extend: 'My.Base',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // 调用 My.Base.method\n         }\n     }\n });\n\n alert(My.Base.method(10);     // alerts 10\n alert(My.Derived2.method(10); // alerts 20\n</code></pre>\n\n<p>然后，它也可以重写静态方法。</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2Override', {\n     override: 'My.Derived2',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // 调用 My.Derived2.method\n         }\n     }\n });\n\n alert(My.Derived2.method(10); // 现在提示 40\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>这个参数, 通过当前方法得到数组或者 <code>arguments</code> 对象,\n例如: <code>this.callParent(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>返回调用父类的方法的结果。</p>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-extend' class='name expandable'>extend</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>拓展 ...</div><div class='long'><p>拓展</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>配置</p>\n</div></li></ul></div></div></div><div id='method-getConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-getConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getConfig' class='name expandable'>getConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>得到配置项 ...</div><div class='long'><p>得到配置项</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>名称</p>\n</div></li></ul></div></div></div><div id='method-getInitialConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-getInitialConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getInitialConfig' class='name expandable'>getInitialConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>得到初始化配置项 ...</div><div class='long'><p>得到初始化配置项</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>名称</p>\n</div></li></ul></div></div></div><div id='method-hasConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-hasConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-hasConfig' class='name expandable'>hasConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>根据名称判断配置项是否存在 ...</div><div class='long'><p>根据名称判断配置项是否存在</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>配置项</p>\n</div></li></ul></div></div></div><div id='method-implement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-implement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-implement' class='name expandable'>implement</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-initConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>这个类的初始化配置。典型例子:\n\nExt.define('My.awesome.Class', {\n    // 这是默认配置\n    config: {\n        name: 'Awesome',\n        isAwes...</div><div class='long'><p>这个类的初始化配置。典型例子:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.awesome.Class', {\n    // 这是默认配置\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome' 超级棒\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>配置</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>mixins 混入原型 键-值对</p>\n</div></li></ul></div></div></div><div id='method-mixin' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-mixin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-mixin' class='name expandable'>mixin</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> mixinClass</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>内部使用混入预处理器（mixins pre-processor） ...</div><div class='long'><p>内部使用混入预处理器（mixins pre-processor）</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>mixinClass</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onConfigUpdate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-onConfigUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-onConfigUpdate' class='name expandable'>onConfigUpdate</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> names, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> callback, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>更新配置项 ...</div><div class='long'><p>更新配置项</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>names</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>名称</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>回调</p>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>范围</p>\n</div></li></ul></div></div></div><div id='method-onExtended' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-onExtended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-onExtended' class='name expandable'>onExtended</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> fn, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>扩展事件 ...</div><div class='long'><p>扩展事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-setConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-setConfig' class='name expandable'>setConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> applyIfNotSet</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>设置配置项 ...</div><div class='long'><p>设置配置项</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>applyIfNotSet</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-statics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>获取从该对象被实例化的类的引用。 ...</div><div class='long'><p>获取从该对象被实例化的类的引用。 请注意不同于 <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code>是独立的作用域，无论<code>this</code>是否运行，总是返回其中的调用类。</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // 总是等于'Cat'，无论'this'是什么，\n                                        // 相当于：My.Cat.speciesName\n\n        alert(this.self.speciesName);   // 依赖 'this'\n\n        statics.totalCreated++;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // 依赖 'this'\n\n        cloned.groupName = this.statics().speciesName;   // 相当于: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', 然后提示 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', 然后提示 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-triggerExtended' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base2.html#Ext-Base-method-triggerExtended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-triggerExtended' class='name expandable'>triggerExtended</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>配置扩展 ...</div><div class='long'><p>配置扩展</p>\n</div></div></div></div></div></div></div>"});