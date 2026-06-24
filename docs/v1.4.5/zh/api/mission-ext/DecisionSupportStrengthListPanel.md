<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DecisionSupportStrengthListPanel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DecisionSupportStrengthListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DecisionSupportStrengthListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom/DecisionSupportStrengthListPanel.cs`

## 概述

`DecisionSupportStrengthListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAbstain` | `public bool IsAbstain { get; set; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; set; }` |
| `IsOptionSelected` | `public bool IsOptionSelected { get; set; }` |
| `IsKingsOutcome` | `public bool IsKingsOutcome { get; set; }` |
| `CurrentIndex` | `public int CurrentIndex { get; set; }` |
| `StrengthButton0` | `public ButtonWidget StrengthButton0 { get; set; }` |
| `StrengthButton1` | `public ButtonWidget StrengthButton1 { get; set; }` |
| `StrengthButton2` | `public ButtonWidget StrengthButton2 { get; set; }` |
| `StrengthButton0Text` | `public RichTextWidget StrengthButton0Text { get; set; }` |
| `StrengthButton1Text` | `public RichTextWidget StrengthButton1Text { get; set; }` |
| `StrengthButton2Text` | `public RichTextWidget StrengthButton2Text { get; set; }` |

## 使用示例

```csharp
var example = new DecisionSupportStrengthListPanel();
```

## 参见

- [完整类目录](../catalog)