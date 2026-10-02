---
title: "Ship"
description: "Ship 的自动生成类参考。"
---
# Ship

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Ship : IShipOrigin,IRandomOwner `
**Base:** IShipOrigin,IRandomOwner
**Source:** TaleWorlds.CampaignSystem/Naval/Ship.cs

## 概述

`Ship` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/Naval/Ship.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### ChangeFigurehead
`public void ChangeFigurehead(Figurehead figurehead) `

### GetPieceAtSlot
`public ShipUpgradePiece GetPieceAtSlot(string slotTag) `

### EquipUpgradePiece
`public void EquipUpgradePiece(string slotTag,ShipUpgradePiece newUpgradePiece) `

### AddToUnlockedPieces
`public void AddToUnlockedPieces(ShipUpgradePiece upgradePiece) `

### HasSlot
`public bool HasSlot(string slotTag) `

### SetName
`public void SetName(TextObject name) `

### GetCampaignSpeed
`public float GetCampaignSpeed() `

### GetSiegeEngines
`public MBList<SiegeEngineType> GetSiegeEngines() `

### UpdateVersionNo
`public void UpdateVersionNo() `

### GetCombatFactor
`public float GetCombatFactor() `

### OnShipDamaged
`public void OnShipDamaged(float rawDamage,IShipOrigin rammingShip,out float modifiedDamage) `

### GetShipVisualSlotInfos
`public List<ShipVisualSlotInfo> GetShipVisualSlotInfos() `

### GetShipSlotAndPieceNames
`public List<ShipSlotAndPieceName> GetShipSlotAndPieceNames() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
