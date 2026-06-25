---
title: WidgetPrefab
description: WidgetPrefab - Gauntlet UI Prefab 文件运行时表示，承载 XML 加载、模板树、常量与视觉定义
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetPrefab`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetPrefab

**命名空间:** TaleWorlds.GauntletUI.PrefabSystem
**模块:** TaleWorlds.GauntletUI.PrefabSystem
**类型:** class
**领域:** Gauntlet UI / Prefab 系统

## 概述

`WidgetPrefab

` 是一?Gauntlet UI Prefab XML 文件在内存中的运行时表示。一?Prefab 描述了一?widget 树（

`WidgetTemplate

`）以及附带的常量定义、参数默认值、视觉定义（VisualDefinitions，用于状态切换的样式表）和自定义元素。`WidgetPrefab

` 既是加载入口（`LoadFrom

` 静态方法把 XML 解析成对象图），也是实例化入口（

`Instantiate

` 把模板树展开为真?widget 实例）?
Prefab 文件结构?

`LoadFrom

` 解析：根节点 

`&lt;Prefab&gt;

` 下有 

`&lt;Parameters&gt;

`、`&lt;Constants&gt;

`、`&lt;Variables&gt;

`、`&lt;VisualDefinitions&gt;

`、`&lt;CustomElements&gt;

`、`&lt;Window&gt;

` 等子节点。`&lt;Window&gt;

` 的第一个子节点就是?widget 模板，所有后?widget 通过 

`WidgetTemplate.LoadFrom

` 递归加载。`&lt;Constants&gt;

` 支持 5 种类型——`Constant

`（直接值）、`BooleanCheck

`（条件三元）、`BrushLayerWidth/Height

`（从 brush layer 取尺寸）、`SpriteWidth/Height

`（从 sprite 取尺寸）?
Mod 作者通常通过 

`UIResourceManager.WidgetFactory.CreateWidget

` ?

`GauntletMovie.LoadMovie

` 间接使用 Prefab，但需要自定义加载流程或工具链时（如运行时生成 Prefab、做 Prefab 校验、写 Prefab 编辑器扩展）会直接操作本类?
## 心智模型

?Prefab 看作"widget 树的?——`WidgetPrefab

` 是定义，

`Instantiate

` 返回?

`WidgetInstantiationResult

` 是实例。多?

`Instantiate

` 同一?Prefab 会得到多棵独立的 widget 树。这??vs 实例"的关系一致?
`Constants

` ?

`Parameters

` 的区别很重要：`Constants

` ?Prefab 内部由作者定义，?widget 树内可被引用的静态值（?brush/sprite 尺寸查询、布尔三元）；`Parameters

` ?Prefab 对外暴露?调用方应传入的参?，每个有默认值，?

`Instantiate(Dictionary&lt;string, WidgetAttributeTemplate&gt; parameters)

` 在实例化时覆盖。`GetConstantValue(name)

` ?

`GetParameterDefaultValue(name)

` 是查询接口?
`Save

` 方法把内存中?Prefab 重新序列化为 

`XmlDocument

`——这?Prefab 编辑器或自动生成工具的核心能力。`VisualDefinitionTemplates

` 是状态动画的核心：每?VisualDefinition 描述"在某?State 下应处于什么视觉属?，配?

`TransitionDuration

`、`EaseType

` 实现状态切换动画?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`RootTemplate

` \| 

`WidgetTemplate

` \| ?widget 模板，承载整?widget 树定义。由 

`LoadFrom

` 通过 

`WidgetTemplate.LoadFrom

` 加载，是 

`Instantiate

` 的入口?\|
\| 

`VisualDefinitionTemplates

` \| 

`Dictionary&lt;string, VisualDefinitionTemplate&gt;

` \| 视觉定义模板表，键为名称，值为带状态动画参数的 VisualState 集合?\|
\| 

`Constants

` \| 

`Dictionary&lt;string, ConstantDefinition&gt;

` \| Prefab 内常量定义，支持直接值、布尔三元、brush/sprite 尺寸查询五种类型?\|
\| 

`Parameters

` \| 

`Dictionary&lt;string, string&gt;

` \| 对外暴露的参数表，键为参数名，值为默认值字符串；实例化时由调用方覆盖?\|
\| 

`CustomElements

` \| 

`Dictionary&lt;string, XmlElement&gt;

` \| 自定义元素表，存?Prefab 中无法被标准 widget 体系表达的外部扩展节点?\|

## 主要方法

### LoadFrom
`

`

`csharp
public static WidgetPrefab LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, string path)
`

`

`
从指定路径加?Prefab XML。流程：?

`XmlReader

` 读取文件（忽略注释）?选中 

`&lt;Prefab&gt;

` 根节??依次尝试解析 

`&lt;Parameters&gt;

`、`&lt;Constants&gt;

`、`&lt;CustomElements&gt;

`、`&lt;VisualDefinitions&gt;

` 子节???

`&lt;Window&gt;.FirstChild

` 作为?widget 模板，调?

`WidgetTemplate.LoadFrom

` 递归加载 ?把根模板?Prefab 关联（`SetRootTemplate

`）→ 遍历 

`prefabExtensionContext.PrefabExtensions

` 调用每个扩展?

`OnLoadingFinished

` 钩子。若文件没有 

`&lt;Prefab&gt;

` 包装节点，则直接?

`&lt;Window&gt;

` 单根结构加载（向后兼容）?
### Save
`

`

`csharp
public XmlDocument Save(PrefabExtensionContext prefabExtensionContext)
`

`

`
把当?Prefab 序列化为 

`XmlDocument

`。重?

`&lt;Prefab&gt;

` 根节点，依次写入 

`&lt;Parameters&gt;

`、`&lt;Constants&gt;

`、`&lt;VisualDefinitions&gt;

`、`&lt;Window&gt;

` 子节点。`SaveParametersTo

` / 

`SaveConstantsTo

` / 

`SaveVisualDefinitionsTo

` 是内部辅助方法，分别处理不同子节点的序列化。常量按 

`ConstantDefinitionType

` 分支写入不同属性组合?
### Instantiate
`

`

`csharp
public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData)
public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary&lt;string, WidgetAttributeTemplate&gt; parameters)
`

`

`
?Prefab 实例化为一棵真?widget 树。无参版本用空字典调用有参版本。实际工作委托给 

`RootTemplate.Instantiate

`，后者递归展开模板并应用传入参数覆盖默认值。返?

`WidgetInstantiationResult

`，包含根 widget 及其上下文?
### GetConstantValue
`

`

`csharp
public ConstantDefinition GetConstantValue(string name)
`

`

`
按名称查询常量定义。未找到返回 

`null

`（`TryGetValue

` 失败时的默认值）。Mod 若要在运行期读取 Prefab 内常量（例如自定义扩展逻辑需要拿?brush 名再做特殊处理）会用到此方法?
### GetParameterDefaultValue
`

`

`csharp
public string GetParameterDefaultValue(string name)
`

`

`
按名称查询参数默认值字符串。未找到返回 

`null

`。用于在不实例化的前提下检?Prefab 期望哪些参数?
### OnRelease
`

`

`csharp
public void OnRelease()
`

`

`
释放 Prefab 持有的根模板资源。`RootTemplate.OnRelease

` 递归释放整个模板树。Prefab 不再使用时调用，避免内存泄漏?
## 使用示例

### 示例: 运行时加载并实例化自定义 Prefab

**场景**: Mod 想在自己?Gauntlet 视图中加载一个自定义 Prefab 文件 

`_myPanel.xml

`，并传入两个参数覆盖默认值?
`

`

`csharp
var prefabPath = System.IO.Path.Combine(ModuleHelper.GetModuleFullPath("MyMod"), "GUI/_myPanel.xml");

var prefab = WidgetPrefab.LoadFrom(
    UIResourceManager.UIContext.PrefabExtensionContext,
    UIResourceManager.UIContext.WidgetAttributeContext,
    prefabPath);

var parameters = new Dictionary&lt;string, WidgetAttributeTemplate&gt;
{
    { "TitleText",   new WidgetAttributeTemplate(new TextObject("我的标题"),   WidgetAttributeTemplate.AttributeType.Text) },
    { "MaxRowCount", new WidgetAttributeTemplate("5",                          WidgetAttributeTemplate.AttributeType.Int)   }
};

WidgetInstantiationResult result = prefab.Instantiate(
    new WidgetCreationData(UIResourceManager.UIContext, myParentWidget),
    parameters);

// result.RootWidget 是实例化后的?widget，可挂到任意父节?myParentWidget.AddChild(result.RootWidget);

// 用完后释?Prefab 本身
prefab.OnRelease();
`

`

`

**要点**: 

`LoadFrom

` 是静态方法，需传入 

`PrefabExtensionContext

` ?

`WidgetAttributeContext

`，二者可?

`UIResourceManager.UIContext

` 拿到；`Instantiate

` 的参数字典键必须?Prefab ?

`&lt;Parameter Name="..."&gt;

` 一致；

`OnRelease

` ?Prefab 不再实例化时调用，但已实例化?widget ?widget 树自身生命周期管理?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
