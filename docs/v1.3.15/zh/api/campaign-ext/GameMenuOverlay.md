<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuOverlay`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuOverlay

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GameMenuOverlay` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsContextMenuEnabled` | `public bool IsContextMenuEnabled { get; set; }` |
| `IsInitializationOver` | `public bool IsInitializationOver { get; set; }` |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |
| `ContextList` | `public MBBindingList<StringItemWithEnabledAndHintVM> ContextList { get; set; }` |
| `CurrentOverlayType` | `public int CurrentOverlayType { get; set; }` |
| `ExitInputKey` | `public InputKeyItemVM ExitInputKey { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteOnOverlayClosed

```csharp
public virtual void ExecuteOnOverlayClosed()
```

### ExecuteOnOverlayOpened

```csharp
public virtual void ExecuteOnOverlayOpened()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Refresh

```csharp
public virtual void Refresh()
```

### UpdateOverlayType

```csharp
public virtual void UpdateOverlayType(GameMenu.MenuOverlayType newType)
```

### OnFrameTick

```csharp
public virtual void OnFrameTick(float dt)
```

### HourlyTick

```csharp
public void HourlyTick()
```

### SetExitInputKey

```csharp
public void SetExitInputKey(HotKey hotKey)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)