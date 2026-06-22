<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenu`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenu

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GameMenu` is a class in the `TaleWorlds.CampaignSystem.GameMenus` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)