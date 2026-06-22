<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapNotificationVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapNotificationVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Map
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MapNotificationVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Map` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |
| `FocusedNotificationItem` | `public MapNotificationItemBaseVM FocusedNotificationItem { get; set; }` |
| `NotificationItems` | `public MBBindingList<MapNotificationItemBaseVM> NotificationItems { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### RegisterMapNotificationType

```csharp
public void RegisterMapNotificationType(Type data, Type item)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnFrameTick

```csharp
public void OnFrameTick(float dt)
```

### OnMenuModeTick

```csharp
public void OnMenuModeTick(float dt)
```

### AddMapNotification

```csharp
public void AddMapNotification(InformationData data)
```

### RemoveAllNotifications

```csharp
public void RemoveAllNotifications()
```

### SetRemoveInputKey

```csharp
public void SetRemoveInputKey(HotKey hotKey)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)