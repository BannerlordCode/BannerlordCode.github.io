<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenu`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenu

**命名空间:** TaleWorlds.CampaignSystem.GameMenus
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GameMenu` 是 `TaleWorlds.CampaignSystem.GameMenus` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public GameMenu.MenuAndOptionType Type { get; }` |
| `StringId` | `public string StringId { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |
| `MenuTitle` | `public TextObject MenuTitle { get; }` |
| `OverlayType` | `public GameMenu.MenuOverlayType OverlayType { get; }` |
| `IsReady` | `public bool IsReady { get; }` |
| `MenuItemAmount` | `public int MenuItemAmount { get; }` |
| `MenuRepeatObjects` | `public List<object> MenuRepeatObjects { get; }` |
| `CurrentRepeatableObject` | `public object CurrentRepeatableObject { get; }` |
| `IsWaitMenu` | `public bool IsWaitMenu { get; }` |
| `IsWaitActive` | `public bool IsWaitActive { get; }` |
| `IsEmpty` | `public bool IsEmpty { get; }` |
| `Progress` | `public float Progress { get; }` |
| `TargetWaitHours` | `public float TargetWaitHours { get; }` |
| `OnTick` | `public OnTickDelegate OnTick { get; }` |
| `OnCondition` | `public OnConditionDelegate OnCondition { get; }` |
| `OnConsequence` | `public OnConsequenceDelegate OnConsequence { get; }` |
| `CurrentRepeatableIndex` | `public int CurrentRepeatableIndex { get; set; }` |
| `MenuOptions` | `public IEnumerable<GameMenuOption> MenuOptions { get; }` |
| `AutoSelectFirst` | `public bool AutoSelectFirst { get; }` |


## 主要方法

### SetMenuRepeatObjects

```csharp
public void SetMenuRepeatObjects(IEnumerable<object> list)
```

### GetMenuOptionConditionsHold

```csharp
public bool GetMenuOptionConditionsHold(Game game, MenuContext menuContext, int menuItemNumber)
```

### GetMenuOptionText

```csharp
public TextObject GetMenuOptionText(int menuItemNumber)
```

### GetGameMenuOption

```csharp
public GameMenuOption GetGameMenuOption(int menuItemNumber)
```

### GetMenuOptionText2

```csharp
public TextObject GetMenuOptionText2(int menuItemNumber)
```

### GetMenuOptionIdString

```csharp
public string GetMenuOptionIdString(int menuItemNumber)
```

### GetMenuOptionTooltip

```csharp
public TextObject GetMenuOptionTooltip(int menuItemNumber)
```

### GetMenuOptionIsLeave

```csharp
public bool GetMenuOptionIsLeave(int menuItemNumber)
```

### SetProgressOfWaitingInMenu

```csharp
public void SetProgressOfWaitingInMenu(float progress)
```

### SetTargetedWaitingTimeAndInitialProgress

```csharp
public void SetTargetedWaitingTimeAndInitialProgress(float targetedWaitingTime, float initialProgress)
```

### GetLeaveMenuOption

```csharp
public GameMenuOption GetLeaveMenuOption(Game game, MenuContext menuContext)
```

### RunOnTick

```csharp
public void RunOnTick(MenuContext menuContext, float dt)
```

### RunWaitMenuCondition

```csharp
public bool RunWaitMenuCondition(MenuContext menuContext)
```

### RunWaitMenuConsequence

```csharp
public void RunWaitMenuConsequence(MenuContext menuContext)
```

### RunMenuOptionConsequence

```csharp
public void RunMenuOptionConsequence(MenuContext menuContext, int menuItemNumber)
```

### StartWait

```csharp
public void StartWait()
```

### EndWait

```csharp
public void EndWait()
```

### RunOnInit

```csharp
public void RunOnInit(Game game, MenuContext menuContext)
```

### PreInit

```csharp
public void PreInit(MenuContext menuContext)
```

### AfterInit

```csharp
public void AfterInit(MenuContext menuContext)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)