<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSpectatorControlVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSpectatorControlVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionSpectatorControlVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `PrevCharacterText` | `public string PrevCharacterText { get; set; }` |
| `NextCharacterText` | `public string NextCharacterText { get; set; }` |
| `TakeControlText` | `public string TakeControlText { get; set; }` |
| `StatusText` | `public string StatusText { get; set; }` |
| `IsTakeControlRelevant` | `public bool IsTakeControlRelevant { get; set; }` |
| `IsTakeControlEnabled` | `public bool IsTakeControlEnabled { get; set; }` |
| `SpectatedAgentName` | `public string SpectatedAgentName { get; set; }` |
| `PrevCharacterKey` | `public InputKeyItemVM PrevCharacterKey { get; set; }` |
| `NextCharacterKey` | `public InputKeyItemVM NextCharacterKey { get; set; }` |
| `TakeControlKey` | `public InputKeyItemVM TakeControlKey { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnSpectatedAgentFocusIn

```csharp
public void OnSpectatedAgentFocusIn(Agent followedAgent)
```

### OnSpectatedAgentFocusOut

```csharp
public void OnSpectatedAgentFocusOut(Agent followedAgent)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetMainAgentStatus

```csharp
public void SetMainAgentStatus(bool isDead)
```

### SetPrevCharacterInputKey

```csharp
public void SetPrevCharacterInputKey(GameKey gameKey)
```

### SetNextCharacterInputKey

```csharp
public void SetNextCharacterInputKey(GameKey gameKey)
```

### SetTakeControlInputKey

```csharp
public void SetTakeControlInputKey(GameKey gameKey)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)