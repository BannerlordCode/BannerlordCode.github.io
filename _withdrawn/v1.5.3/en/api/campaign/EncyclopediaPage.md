---
title: "EncyclopediaPage"
description: "Auto-generated class reference for EncyclopediaPage."
---
# EncyclopediaPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaPage `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaPage.cs

## Overview

Auto-generated stub for `EncyclopediaPage`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### InitializeListItems
`protected abstract IEnumerable<EncyclopediaListItem> InitializeListItems()`

### InitializeFilterItems
`protected abstract IEnumerable<EncyclopediaFilterGroup> InitializeFilterItems()`

### InitializeSortControllers
`protected abstract IEnumerable<EncyclopediaSortController> InitializeSortControllers()`

### IsRelevant
`public virtual bool IsRelevant()`

### HasIdentifierType
`public bool HasIdentifierType(Type identifierType)`

### GetIdentifier
`public string GetIdentifier(Type identifierType)`

### GetIdentifierNames
`public string[] GetIdentifierNames()`

### IsFiltered
`public bool IsFiltered(object o)`

### GetViewFullyQualifiedName
`public virtual string GetViewFullyQualifiedName()`

### GetStringID
`public virtual string GetStringID()`

### GetName
`public virtual TextObject GetName()`

### GetObject
`public virtual MBObjectBase GetObject(string typeName,string stringID)`

### IsValidEncyclopediaItem
`public virtual bool IsValidEncyclopediaItem(object o)`

### GetDescriptionText
`public virtual TextObject GetDescriptionText()`

### GetListItems
`public IEnumerable<EncyclopediaListItem> GetListItems()`

### GetFilterItems
`public IEnumerable<EncyclopediaFilterGroup> GetFilterItems()`

### GetSortControllers
`public IEnumerable<EncyclopediaSortController> GetSortControllers()`

## See Also

- [Section index](../)
