<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NotificationSceneProperties`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NotificationSceneProperties

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 结构体 struct struct
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`NotificationSceneProperties` 是 `TaleWorlds.Core` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `SceneID` | `public virtual string SceneID { get; }` |
| `SoundEventPath` | `public virtual string SoundEventPath { get; }` |
| `TitleText` | `public virtual TextObject TitleText { get; }` |
| `AffirmativeDescriptionText` | `public virtual TextObject AffirmativeDescriptionText { get; }` |
| `NegativeDescriptionText` | `public virtual TextObject NegativeDescriptionText { get; }` |
| `AffirmativeHintText` | `public virtual TextObject AffirmativeHintText { get; }` |
| `AffirmativeHintTextExtended` | `public virtual TextObject AffirmativeHintTextExtended { get; }` |
| `AffirmativeTitleText` | `public virtual TextObject AffirmativeTitleText { get; }` |
| `NegativeTitleText` | `public virtual TextObject NegativeTitleText { get; }` |
| `AffirmativeText` | `public virtual TextObject AffirmativeText { get; }` |
| `NegativeText` | `public virtual TextObject NegativeText { get; }` |
| `IsAffirmativeOptionShown` | `public virtual bool IsAffirmativeOptionShown { get; }` |
| `IsNegativeOptionShown` | `public virtual bool IsNegativeOptionShown { get; }` |
| `PauseActiveState` | `public virtual bool PauseActiveState { get; }` |
| `RelevantContext` | `public virtual SceneNotificationData.RelevantContextType RelevantContext { get; }` |
| `SceneProperties` | `public virtual SceneNotificationData.NotificationSceneProperties SceneProperties { get; }` |


## 主要方法

### OnAffirmativeAction

```csharp
public virtual void OnAffirmativeAction()
```

### OnNegativeAction

```csharp
public virtual void OnNegativeAction()
```

### OnCloseAction

```csharp
public virtual void OnCloseAction()
```

### GetBanners

```csharp
public virtual Banner GetBanners()
```

### GetSceneNotificationCharacters

```csharp
public virtual SceneNotificationData.SceneNotificationCharacter GetSceneNotificationCharacters()
```

### GetShips

```csharp
public virtual SceneNotificationData.SceneNotificationShip GetShips()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)