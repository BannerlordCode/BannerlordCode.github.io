<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapNotificationItemBaseVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapNotificationItemBaseVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MapNotificationItemBaseVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `NavigationHandler` | `public INavigationHandler NavigationHandler { get; }` |
| `Data` | `public InformationData Data { get; }` |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `NotificationIdentifier` | `public string NotificationIdentifier { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ForceInspection` | `public bool ForceInspection { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `SoundId` | `public string SoundId { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### SetNavigationHandler

```csharp
public void SetNavigationHandler(INavigationHandler navigationHandler)
```

### SetFastMoveCameraToPosition

```csharp
public void SetFastMoveCameraToPosition(Action<CampaignVec2> fastMoveCameraToPosition)
```

### ExecuteAction

```csharp
public void ExecuteAction()
```

### ExecuteRemove

```csharp
public void ExecuteRemove()
```

### ExecuteSetFocused

```csharp
public void ExecuteSetFocused()
```

### ExecuteSetUnfocused

```csharp
public void ExecuteSetUnfocused()
```

### ManualRefreshRelevantStatus

```csharp
public virtual void ManualRefreshRelevantStatus()
```

### SetRemoveInputKey

```csharp
public void SetRemoveInputKey(HotKey hotKey)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)