---
title: "GameMenuOption"
description: "GameMenuOption 的自动生成类参考。"
---
# GameMenuOption

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuOption`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuOption.cs`

## 概述

`GameMenuOption` 位于 `TaleWorlds.CampaignSystem.GameMenus`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.GameMenus` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public GameMenu.MenuAndOptionType Type { get; }` |
| `OptionLeaveType` | `public GameMenuOption.LeaveType OptionLeaveType { get; }` |
| `OptionQuestData` | `public GameMenuOption.IssueQuestFlags OptionQuestData { get; }` |
| `IdString` | `public string IdString { get; }` |
| `Text` | `public TextObject Text { get; }` |
| `Text2` | `public TextObject Text2 { get; }` |
| `Tooltip` | `public TextObject Tooltip { get; }` |
| `IsLeave` | `public bool IsLeave { get; }` |
| `IsRepeatable` | `public bool IsRepeatable { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |

## 主要方法

### GetConditionsHold
`public bool GetConditionsHold(Game game, MenuContext menuContext)`

**用途 / Purpose:** 读取并返回当前对象中 「conditions hold」 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuOption 实例
GameMenuOption gameMenuOption = ...;
var result = gameMenuOption.GetConditionsHold(game, menuContext);
```

### RunConsequence
`public void RunConsequence(MenuContext menuContext)`

**用途 / Purpose:** 处理与 「run consequence」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GameMenuOption 实例
GameMenuOption gameMenuOption = ...;
gameMenuOption.RunConsequence(menuContext);
```

### SetEnable
`public void SetEnable(bool isEnable)`

**用途 / Purpose:** 为 「enable」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameMenuOption 实例
GameMenuOption gameMenuOption = ...;
gameMenuOption.SetEnable(false);
```

### OnConditionDelegate
`public delegate bool OnConditionDelegate(MenuCallbackArgs args)`

**用途 / Purpose:** 在 「condition delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuOption 实例
GameMenuOption gameMenuOption = ...;
var result = gameMenuOption.OnConditionDelegate(args);
```

### OnConsequenceDelegate
`public delegate void OnConsequenceDelegate(MenuCallbackArgs args)`

**用途 / Purpose:** 在 「consequence delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuOption 实例
GameMenuOption gameMenuOption = ...;
gameMenuOption.OnConsequenceDelegate(args);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameMenuOption gameMenuOption = ...;
gameMenuOption.GetConditionsHold(game, menuContext);
```

## 参见

- [本区域目录](../)