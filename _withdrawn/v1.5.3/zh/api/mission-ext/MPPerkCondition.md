---
title: "MPPerkCondition"
description: "MPPerkCondition 的自动生成类参考。"
---
# MPPerkCondition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPPerkCondition<T> : MPPerkCondition where T : MissionMultiplayerGameModeBase `
**Base:** MPPerkCondition
**Source:** TaleWorlds.MountAndBlade/MPPerkCondition.2.cs

## 概述

`MPPerkCondition` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MPPerkCondition.2.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### IsGameModesValid
`protected override bool IsGameModesValid(List<string> gameModes) `
`protected virtual bool IsGameModesValid(List<string> gameModes) `

### Check
`public abstract bool Check(MissionPeer peer)`
`public abstract bool Check(Agent agent)`

### Deserialize
`protected abstract void Deserialize(XmlNode node)`

### CreateFrom
`public static MPPerkCondition CreateFrom(List<string> gameModes,XmlNode node) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
