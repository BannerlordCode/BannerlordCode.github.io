<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PrefabDependency`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PrefabDependency

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class PrefabDependency`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.CodeGenerator/TaleWorlds.GauntletUI.CodeGenerator/PrefabDependency.cs`

## 概述

`PrefabDependency` 位于 `TaleWorlds.GauntletUI.CodeGenerator`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.CodeGenerator` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public string Type { get; }` |
| `VariantName` | `public string VariantName { get; }` |
| `IsRoot` | `public bool IsRoot { get; }` |
| `WidgetTemplateGenerateContext` | `public WidgetTemplateGenerateContext WidgetTemplateGenerateContext { get; }` |

## 使用示例

```csharp
var example = new PrefabDependency();
```

## 参见

- [完整类目录](../catalog)