---
title: "Crafting"
description: "Auto-generated class reference for Crafting."
---
# Crafting

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Crafting `
**Base:** System.Object
**Source:** TaleWorlds.Core/Crafting.cs

## Overview

Auto-generated stub for `Crafting`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SetCraftedWeaponName
`public void SetCraftedWeaponName(TextObject weaponName)`

### Init
`public void Init()`

### GetRandomPieceOfType
`public WeaponDesignElement GetRandomPieceOfType(CraftingPiece.PieceTypes pieceType,bool randomScale)`

### SwitchToCraftedItem
`public void SwitchToCraftedItem(ItemObject item)`

### Randomize
`public void Randomize()`

### SwitchToPiece
`public void SwitchToPiece(WeaponDesignElement piece)`

### ScaleThePiece
`public void ScaleThePiece(CraftingPiece.PieceTypes scalingPieceType,int percentage)`

### ReIndex
`public void ReIndex(bool enforceReCreation = false)`

### Undo
`public bool Undo()`

### Redo
`public bool Redo()`

### UpdateHistory
`public void UpdateHistory()`

### GetRandomCraftName
`public TextObject GetRandomCraftName()`

### GenerateItem
`public static void GenerateItem(WeaponDesign weaponDesignTemplate,TextObject name,BasicCultureObject culture,ItemModifierGroup itemModifierGroup,ref ItemObject itemObject,string customId = null)`

### GetCurrentCraftedItemObject
`public ItemObject GetCurrentCraftedItemObject(bool forceReCreate = false,string customId = null)`

### GetStatDatasFromTemplate
`public static IEnumerable<CraftingStatData> GetStatDatasFromTemplate(int usageIndex,ItemObject craftedItemObject,CraftingTemplate template)`

### GetStatDatas
`public IEnumerable<CraftingStatData> GetStatDatas(int usageIndex)`

### GetXmlCodeForCurrentItem
`public string GetXmlCodeForCurrentItem(ItemObject item)`

### TryGetWeaponPropertiesFromXmlCode
`public bool TryGetWeaponPropertiesFromXmlCode(string xmlCode,out CraftingTemplate craftingTemplate,out ValueTuple<CraftingPiece,int>[] pieces)`

### CreatePreCraftedWeaponOnDeserialize
`public static ItemObject CreatePreCraftedWeaponOnDeserialize(ItemObject itemObject,WeaponDesignElement[] usedPieces,string templateId,TextObject craftedWeaponName,ItemModifierGroup itemModifierGroup)`

### InitializePreCraftedWeaponOnLoad
`public static ItemObject InitializePreCraftedWeaponOnLoad(ItemObject itemObject,WeaponDesign craftedData,TextObject itemName,BasicCultureObject culture)`

## See Also

- [Section index](../)
