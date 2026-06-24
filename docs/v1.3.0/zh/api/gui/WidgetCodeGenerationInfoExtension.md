<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetCodeGenerationInfoExtension`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetCodeGenerationInfoExtension

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class WidgetCodeGenerationInfoExtension`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.CodeGenerator/WidgetCodeGenerationInfoExtension.cs`

## 概述

`WidgetCodeGenerationInfoExtension` 位于 `TaleWorlds.GauntletUI.CodeGenerator`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.CodeGenerator` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public abstract void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### OnFillSetAttributesMethod
`public abstract void OnFillSetAttributesMethod(MethodCode methodCode)`

**用途 / Purpose:** 当 `fill set attributes method` 事件触发时调用此方法。

### TryGetVariantPropertiesForNewDependency
`public abstract bool TryGetVariantPropertiesForNewDependency(out UICodeGenerationVariantExtension variantExtension, out Dictionary<string, object> data)`

**用途 / Purpose:** 尝试获取 `get variant properties for new dependency`，通常以 out 参数返回结果。

### OnFillCreateWidgetMethod
`public abstract void OnFillCreateWidgetMethod(MethodCode methodCode)`

**用途 / Purpose:** 当 `fill create widget method` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomWidgetCodeGenerationInfoExtension();
```

## 参见

- [完整类目录](../catalog)