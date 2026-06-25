---
title: "WidgetCodeGenerationInfo"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetCodeGenerationInfo`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetCodeGenerationInfo

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetCodeGenerationInfo`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.CodeGenerator/WidgetCodeGenerationInfo.cs`

## 概述

`WidgetCodeGenerationInfo` 位于 `TaleWorlds.GauntletUI.CodeGenerator`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.CodeGenerator` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RootWidgetTemplateGenerateContext` | `public WidgetTemplateGenerateContext RootWidgetTemplateGenerateContext { get; }` |
| `WidgetTemplate` | `public WidgetTemplate WidgetTemplate { get; }` |
| `WidgetFactory` | `public WidgetFactory WidgetFactory { get; }` |
| `VariableName` | `public string VariableName { get; }` |
| `Parent` | `public WidgetCodeGenerationInfo Parent { get; }` |
| `Extension` | `public WidgetCodeGenerationInfoExtension Extension { get; }` |
| `ChildWidgetTemplateGenerateContext` | `public WidgetTemplateGenerateContext ChildWidgetTemplateGenerateContext { get; }` |
| `IsRoot` | `public bool IsRoot { get; }` |
| `Id` | `public string Id { get; }` |
| `Children` | `public List<WidgetCodeGenerationInfo> Children { get; }` |

## 主要方法

### FindChild
`public WidgetCodeGenerationInfoChildSearchResult FindChild(BindingPath path)`

**用途 / Purpose:** 处理 `find child` 相关逻辑。

### GetPassedParametersToChild
`public Dictionary<string, WidgetAttributeTemplate> GetPassedParametersToChild()`

**用途 / Purpose:** 获取 `passed parameters to child` 的当前值。

### CheckDependendType
`public void CheckDependendType()`

**用途 / Purpose:** 处理 `check dependend type` 相关逻辑。

### GetUseableTypeName
`public string GetUseableTypeName()`

**用途 / Purpose:** 获取 `useable type name` 的当前值。

### CreateVariableCode
`public VariableCode CreateVariableCode()`

**用途 / Purpose:** 创建一个 `variable code` 实例或对象。

## 使用示例

```csharp
var value = new WidgetCodeGenerationInfo();
value.FindChild(path);
```

## 参见

- [完整类目录](../catalog)