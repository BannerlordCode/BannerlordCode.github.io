<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TrainingIcon`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TrainingIcon

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`TrainingIcon` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Focused` | `public bool Focused { get; }` |


## 主要方法

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### SetMarked

```csharp
public void SetMarked(bool highlight)
```

### GetIsActivated

```csharp
public bool GetIsActivated()
```

### GetTrainingSubTypeTag

```csharp
public string GetTrainingSubTypeTag()
```

### DisableIcon

```csharp
public void DisableIcon()
```

### EnableIcon

```csharp
public void EnableIcon()
```

### GetDescriptionText

```csharp
public override TextObject GetDescriptionText(WeakGameEntity gameEntity)
```

### GetActionTextForStandingPoint

```csharp
public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject = null)
```

### OnFocusGain

```csharp
public override void OnFocusGain(Agent userAgent)
```

### OnFocusLose

```csharp
public override void OnFocusLose(Agent userAgent)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)