---
title: "Ship"
description: "Auto-generated class reference for Ship."
---
# Ship

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Ship : IShipOrigin,IRandomOwner `
**Base:** IShipOrigin, IRandomOwner
**Source:** TaleWorlds.CampaignSystem/Naval/Ship.cs

## Overview

Auto-generated stub for `Ship`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### ChangeFigurehead
`public void ChangeFigurehead(Figurehead figurehead)`

### GetPieceAtSlot
`public ShipUpgradePiece GetPieceAtSlot(string slotTag)`

### EquipUpgradePiece
`public void EquipUpgradePiece(string slotTag,ShipUpgradePiece newUpgradePiece)`

### AddToUnlockedPieces
`public void AddToUnlockedPieces(ShipUpgradePiece upgradePiece)`

### HasSlot
`public bool HasSlot(string slotTag)`

### SetName
`public void SetName(TextObject name)`

### GetCampaignSpeed
`public float GetCampaignSpeed()`

### GetSiegeEngines
`public MBList<SiegeEngineType> GetSiegeEngines()`

### UpdateVersionNo
`public void UpdateVersionNo()`

### GetCombatFactor
`public float GetCombatFactor()`

### OnShipDamaged
`public void OnShipDamaged(float rawDamage,IShipOrigin rammingShip,out float modifiedDamage)`

### GetShipVisualSlotInfos
`public List<ShipVisualSlotInfo> GetShipVisualSlotInfos()`

### GetShipSlotAndPieceNames
`public List<ShipSlotAndPieceName> GetShipSlotAndPieceNames()`

## See Also

- [Section index](../)
