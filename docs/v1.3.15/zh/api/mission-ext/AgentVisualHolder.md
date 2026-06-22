<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentVisualHolder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentVisualHolder

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`AgentVisualHolder` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)