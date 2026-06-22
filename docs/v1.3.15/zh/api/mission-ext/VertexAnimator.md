<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VertexAnimator`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VertexAnimator

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`VertexAnimator` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `BeginKey` | `public int BeginKey { get; }` |
| `EndKey` | `public int EndKey { get; }` |
| `Speed` | `public float Speed { get; }` |
| `Progress` | `public float Progress { get; }` |


## 主要方法

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### PlayOnce

```csharp
public void PlayOnce()
```

### Pause

```csharp
public void Pause()
```

### Play

```csharp
public void Play()
```

### Resume

```csharp
public void Resume()
```

### Stop

```csharp
public void Stop()
```

### StopAndGoToEnd

```csharp
public void StopAndGoToEnd()
```

### SetAnimation

```csharp
public void SetAnimation(int beginKey, int endKey, float speed)
```

### SetAnimationSynched

```csharp
public void SetAnimationSynched(int beginKey, int endKey, float speed)
```

### SetProgressSynched

```csharp
public void SetProgressSynched(float value)
```

### WriteToNetwork

```csharp
public override void WriteToNetwork()
```

### OnAfterReadFromNetwork

```csharp
public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)
```

### ReadFromNetwork

```csharp
public bool ReadFromNetwork(ref bool bufferReadValid)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)