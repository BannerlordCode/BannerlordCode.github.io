---
title: "AgentVisualHolder"
description: "AgentVisualHolder：TaleWorlds.MountAndBlade 的 public 类，继承 IAgentVisual；公开成员 17 个（方法 16、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/AgentVisualHolder.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentVisualHolder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentVisualHolder : IAgentVisual`
**File:** `TaleWorlds.MountAndBlade/AgentVisualHolder.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

AgentVisualHolder 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/AgentVisualHolder.cs。它是一个 public 类，实现/继承 IAgentVisual，继承链为 AgentVisualHolder → IAgentVisual。public/protected 成员共 17 个：16 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentVisualHolder 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 AgentVisualHolder → IAgentVisual。成员构成以方法为主（方法 16/17，属性 0/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/AgentVisualHolder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AgentVisualHolder` | `public AgentVisualHolder(MatrixFrame frame, Equipment equipment, string name, BodyProperties bodyProperties)` | 构造函数 |
| `SetAction` | `public void SetAction(in ActionIndexCache actionName, float startProgress = 0f, bool forceFaceMorphRestart = true)` | 方法 |
| `GetEntity` | `public GameEntity GetEntity()` | 方法 |
| `GetVisuals` | `public MBAgentVisuals GetVisuals()` | 方法 |
| `SetFrame` | `public void SetFrame(ref MatrixFrame frame)` | 方法 |
| `GetFrame` | `public MatrixFrame GetFrame()` | 方法 |
| `GetBodyProperties` | `public BodyProperties GetBodyProperties()` | 方法 |
| `SetBodyProperties` | `public void SetBodyProperties(BodyProperties bodyProperties)` | 方法 |
| `GetIsFemale` | `public bool GetIsFemale()` | 方法 |
| `GetCharacterObjectID` | `public string GetCharacterObjectID()` | 方法 |
| `SetCharacterObjectID` | `public void SetCharacterObjectID(string id)` | 方法 |
| `GetEquipment` | `public Equipment GetEquipment()` | 方法 |
| `RefreshWithNewEquipment` | `public void RefreshWithNewEquipment(Equipment equipment)` | 方法 |
| `SetClothingColors` | `public void SetClothingColors(uint color1, uint color2)` | 方法 |
| `GetClothingColors` | `public void GetClothingColors(out uint color1, out uint color2)` | 方法 |
| `GetCopyAgentVisualsData` | `public AgentVisualsData GetCopyAgentVisualsData()` | 方法 |
| `Refresh` | `public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IAgentVisual](../IAgentVisual/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
