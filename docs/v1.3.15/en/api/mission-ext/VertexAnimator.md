<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VertexAnimator`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VertexAnimator

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `VertexAnimator` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `BeginKey` | `public int BeginKey { get; }` |
| `EndKey` | `public int EndKey { get; }` |
| `Speed` | `public float Speed { get; }` |
| `Progress` | `public float Progress { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)