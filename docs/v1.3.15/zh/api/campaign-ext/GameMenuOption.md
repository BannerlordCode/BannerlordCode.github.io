<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuOption`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuOption

**命名空间:** TaleWorlds.CampaignSystem.GameMenus
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GameMenuOption` 是 `TaleWorlds.CampaignSystem.GameMenus` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public bool GetConditionsHold(Game game, MenuContext menuContext)
```

### RunConsequence

```csharp
public void RunConsequence(MenuContext menuContext)
```

### SetEnable

```csharp
public void SetEnable(bool isEnable)
```

### OnConditionDelegate

```csharp
public delegate bool OnConditionDelegate(MenuCallbackArgs args)
```

### OnConsequenceDelegate

```csharp
public delegate void OnConsequenceDelegate(MenuCallbackArgs args)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)