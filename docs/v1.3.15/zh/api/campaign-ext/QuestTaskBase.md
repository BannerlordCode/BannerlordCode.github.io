<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestTaskBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestTaskBase

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`QuestTaskBase` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsLogged` | `public bool IsLogged { get; }` |
| `IsActive` | `public bool IsActive { get; }` |


## 主要方法

### Finish

```csharp
public void Finish(QuestTaskBase.FinishStates finishState)
```

### AddTaskDialogs

```csharp
public void AddTaskDialogs()
```

### SetReferences

```csharp
public virtual void SetReferences()
```

### AddTaskDialogOnGameLoaded

```csharp
public void AddTaskDialogOnGameLoaded(DialogFlow dialogFlow)
```

### AddTaskBehaviorsOnGameLoad

```csharp
public void AddTaskBehaviorsOnGameLoad(Action onSucceededAction = null, Action onFailedAction = null, Action onCanceledAction = null)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)