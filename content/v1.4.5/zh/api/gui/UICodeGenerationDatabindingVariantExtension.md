---
title: "UICodeGenerationDatabindingVariantExtension"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UICodeGenerationDatabindingVariantExtension`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# UICodeGenerationDatabindingVariantExtension

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class UICodeGenerationDatabindingVariantExtension : UICodeGenerationVariantExtension`
**Base:** `UICodeGenerationVariantExtension`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.CodeGenerator/TaleWorlds.GauntletUI.CodeGenerator/UICodeGenerationDatabindingVariantExtension.cs`

## 概述

`UICodeGenerationDatabindingVariantExtension` 位于 `TaleWorlds.GauntletUI.CodeGenerator`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.CodeGenerator` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetPrefabExtension
`public override PrefabExtension GetPrefabExtension()`

**用途 / Purpose:** 获取 `prefab extension` 的当前值。

### AddExtensionVariables
`public override void AddExtensionVariables(ClassCode classCode)`

**用途 / Purpose:** 向当前集合/状态中添加 `extension variables`。

### Initialize
`public override void Initialize(WidgetTemplateGenerateContext widgetTemplateGenerateContext)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetAttributeType
`public override Type GetAttributeType(WidgetAttributeTemplate widgetAttributeTemplate)`

**用途 / Purpose:** 获取 `attribute type` 的当前值。

### DoExtraCodeGeneration
`public override void DoExtraCodeGeneration(ClassCode classCode)`

**用途 / Purpose:** 处理 `do extra code generation` 相关逻辑。

### AddExtrasToCreatorMethod
`public override void AddExtrasToCreatorMethod(MethodCode methodCode)`

**用途 / Purpose:** 向当前集合/状态中添加 `extras to creator method`。

### CreateWidgetCodeGenerationInfoExtension
`public override WidgetCodeGenerationInfoExtension CreateWidgetCodeGenerationInfoExtension(WidgetCodeGenerationInfo widgetCodeGenerationInfo)`

**用途 / Purpose:** 创建一个 `widget code generation info extension` 实例或对象。

## 使用示例

```csharp
var value = new UICodeGenerationDatabindingVariantExtension();
value.GetPrefabExtension();
```

## 参见

- [完整类目录](../catalog)