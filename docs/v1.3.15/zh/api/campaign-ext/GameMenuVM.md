<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GameMenuVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `MenuContext` | `public MenuContext MenuContext { get; }` |
| `IsNight` | `public bool IsNight { get; set; }` |
| `IsInSiegeMode` | `public bool IsInSiegeMode { get; set; }` |
| `IsEncounterMenu` | `public bool IsEncounterMenu { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ContextText` | `public string ContextText { get; set; }` |
| `ItemList` | `public MBBindingList<GameMenuItemVM> ItemList { get; set; }` |
| `ProgressItemList` | `public MBBindingList<GameMenuItemProgressVM> ProgressItemList { get; set; }` |
| `Background` | `public string Background { get; set; }` |
| `BackgroundCopy` | `public string BackgroundCopy { get; set; }` |
| `MenuId` | `public string MenuId { get; set; }` |
| `PlunderItems` | `public MBBindingList<GameMenuPlunderItemVM> PlunderItems { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### SetIdleMode

```csharp
public void SetIdleMode(bool isIdle)
```

### Refresh

```csharp
public void Refresh(bool forceUpdateItems)
```

### OnFrameTick

```csharp
public void OnFrameTick()
```

### UpdateMenuContext

```csharp
public void UpdateMenuContext(MenuContext newMenuContext)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### AddHotKey

```csharp
public void AddHotKey(GameMenuOption.LeaveType leaveType, GameKey gameKey)
```

### ExecuteLink

```csharp
public void ExecuteLink(string link)
```

### Get

```csharp
public TItem Get()
```

### Release

```csharp
public void Release(TItem item)
```

### Compare

```csharp
public int Compare(GameMenuItemVM x, GameMenuItemVM y)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)