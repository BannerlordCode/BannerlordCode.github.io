<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentVisualHolder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentVisualHolder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `AgentVisualHolder` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### SetAction

```csharp
public void SetAction(in ActionIndexCache actionName, float startProgress = 0f, bool forceFaceMorphRestart = true)
```

### GetEntity

```csharp
public GameEntity GetEntity()
```

### GetVisuals

```csharp
public MBAgentVisuals GetVisuals()
```

### SetFrame

```csharp
public void SetFrame(ref MatrixFrame frame)
```

### GetFrame

```csharp
public MatrixFrame GetFrame()
```

### GetBodyProperties

```csharp
public BodyProperties GetBodyProperties()
```

### SetBodyProperties

```csharp
public void SetBodyProperties(BodyProperties bodyProperties)
```

### GetIsFemale

```csharp
public bool GetIsFemale()
```

### GetCharacterObjectID

```csharp
public string GetCharacterObjectID()
```

### SetCharacterObjectID

```csharp
public void SetCharacterObjectID(string id)
```

### GetEquipment

```csharp
public Equipment GetEquipment()
```

### RefreshWithNewEquipment

```csharp
public void RefreshWithNewEquipment(Equipment equipment)
```

### SetClothingColors

```csharp
public void SetClothingColors(uint color1, uint color2)
```

### GetClothingColors

```csharp
public void GetClothingColors(out uint color1, out uint color2)
```

### GetCopyAgentVisualsData

```csharp
public AgentVisualsData GetCopyAgentVisualsData()
```

### Refresh

```csharp
public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)