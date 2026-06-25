---
title: WidgetExtensions
description: WidgetExtensions - Gauntlet Prefab 系统的属性反射赋值工?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetExtensions`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetExtensions
**命名空间:** TaleWorlds.GauntletUI.PrefabSystem
**模块:** TaleWorlds.GauntletUI.PrefabSystem
**类型:** static class

## 概述
`WidgetExtensions

` ?Gauntlet prefab 系统的反射赋值工具类。它?XML prefab 中以字符串形式书写的属性值（?

`Width="100"

`、`Brush="SPC.LobbyButton"

`、`Sprite="General\Arrow"

`）转换为对应类型的实际对象并赋给目标控件的属性。这?prefab 反序列化的核心环节?
类还支持"点分属性路?——属性名可以写成 

`Child.InnerBrush.Color

`，反射会逐级取属性直到最终目标。这允许 prefab 直接设置嵌套子对象的属性，而无需暴露公共 setter?
## 心智模型
入口方法 

`SetWidgetAttributeFromString

` 接收目标对象、属性名字符串、属性值字符串以及若干工厂对象（`BrushFactory

`、`SpriteData

` 等）。它先用 

`GetObjectAndProperty

` 按点号分割属性名，递归反射到最终属性，然后根据属性的 

`PropertyType

` 分支转换：`int

`/

`float

`/

`bool

`/

`string

` 走基本类型转换，

`Brush

` ?

`BrushFactory.GetBrush

`，`Sprite

` ?

`SpriteData.GetSprite

`，枚举走 

`Enum.Parse

`，`Color

` ?

`Color.ConvertStringToColor

`，`Widget

` ?

`FindChild

` 按绑定路径查找?
`bool

` 类型的字符串解析只接?

`"true"

`（小写）为真，其他任何值都为假——这?prefab XML 的约定。所有异常被捕获并触?

`Debug.FailedAssert

`，不会向上抛出，避免单个属性错误导致整?prefab 加载失败?
## 主要方法
### SetWidgetAttributeFromString
`

`

`csharp
public static void SetWidgetAttributeFromString(
    object target, string name, string value,
    BrushFactory brushFactory, SpriteData spriteData,
    Dictionary&lt;string, VisualDefinitionTemplate&gt; visualDefinitionTemplates,
    Dictionary&lt;string, ConstantDefinition&gt; constants,
    Dictionary&lt;string, WidgetAttributeTemplate&gt; parameters,
    Dictionary&lt;string, XmlElement&gt; customElements,
    Dictionary&lt;string, string&gt; defaultParameters)
`

`

`
从字符串值设置目标对象的属性。按属性类型分支转换并反射赋值。任何异常被捕获并触发断言，不抛出?
### GetWidgetAttributeType
`

`

`csharp
public static Type GetWidgetAttributeType(object target, string name)
`

`

`
返回目标对象上指定属性路径的 

`PropertyType

`，属性不存在时返?

`null

`。用?prefab 编辑器预知属性类型?
### SetWidgetAttribute
`

`

`csharp
public static void SetWidgetAttribute(UIContext context, object target, string name, object value)
`

`

`
从已类型化的对象值设置属性。仅当传入值是 

`string

` 时才做类型转换（Sprite/Brush/int/Color），其他类型直接反射赋值。这?

`SetWidgetAttributeFromString

` ?已转?版本?
### GetObjectAndProperty (private)
`

`

`csharp
private static void GetObjectAndProperty(object parent, string name, int nameStartIndex,
    out object targetObject, out PropertyInfo targetPropertyInfo)
`

`

`
按点号递归反射属性路径。例?

`"A.B.C"

` 会先?

`parent.A

`，再?

`.B

`，再?

`.C

`，最终返?

`targetObject = parent.A.B

` ?

`targetPropertyInfo = C ?PropertyInfo

`?
## 使用示例
### 示例: 模拟 prefab 反序列化
**场景**: mod 自定?prefab 加载器或调试属性赋值时，需要手动调?prefab 系统的属性设置逻辑?

`

`

`csharp
// 模拟 prefab ?&lt;Widget PositionXOffset="10" Brush="SPC.Button" IsVisible="true" /&gt;
var widget = new Widget(uiContext);
WidgetExtensions.SetWidgetAttributeFromString(
    target: widget,
    name: "PositionXOffset",       // 直接属?    value: "10",
    brushFactory: uiContext.BrushFactory,
    spriteData: uiContext.SpriteData,
    visualDefinitionTemplates: templates,
    constants: constants,
    parameters: parameters,
    customElements: customElements,
    defaultParameters: defaults);

// 点分路径：设置子属?WidgetExtensions.SetWidgetAttributeFromString(
    target: widget,
    name: "ReadOnlyBrush.BackgroundColor",
    value: "RGB(255,0,0)",
    /* ...其他参数同上 */);
`

`

`
**要点**: 

`bool

` 值必须是小写 

`"true"

`，`"True"

` ?

`"1"

` 都会被判?false；属性路径中任一节点?null 会导致后续反射失败（被捕获为断言）；

`Brush

` ?

`Sprite

` 必须传入?null 的工厂对象，否则对应类型属性会被静默跳过?
## 参见
- [完整类目录](../catalog-campaign)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)