---
title: "CreateAgent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CreateAgent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CreateAgent

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class CreateAgent : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/CreateAgent.cs`

## 概述

`CreateAgent` 位于 `NetworkMessages.FromServer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `NetworkMessages.FromServer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AgentIndex` | `public int AgentIndex { get; }` |
| `MountAgentIndex` | `public int MountAgentIndex { get; }` |
| `Peer` | `public NetworkCommunicator Peer { get; }` |
| `Character` | `public BasicCharacterObject Character { get; }` |
| `Monster` | `public Monster Monster { get; }` |
| `MissionEquipment` | `public MissionEquipment MissionEquipment { get; }` |
| `SpawnEquipment` | `public Equipment SpawnEquipment { get; }` |
| `BodyPropertiesValue` | `public BodyProperties BodyPropertiesValue { get; }` |
| `BodyPropertiesSeed` | `public int BodyPropertiesSeed { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `TeamIndex` | `public int TeamIndex { get; }` |
| `Position` | `public Vec3 Position { get; }` |
| `Direction` | `public Vec2 Direction { get; }` |
| `FormationIndex` | `public int FormationIndex { get; }` |
| `IsPlayerAgent` | `public bool IsPlayerAgent { get; }` |
| `ClothingColor1` | `public uint ClothingColor1 { get; }` |
| `ClothingColor2` | `public uint ClothingColor2 { get; }` |

## 使用示例

```csharp
var example = new CreateAgent();
```

## 参见

- [完整类目录](../catalog)