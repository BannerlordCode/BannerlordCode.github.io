---
title: "EncyclopediaPage"
description: "EncyclopediaPage 的自动生成类参考。"
---
# EncyclopediaPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaPage `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaPage.cs

## 概述

`EncyclopediaPage` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaPage.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### InitializeListItems
`protected abstract IEnumerable<EncyclopediaListItem> InitializeListItems()`

### InitializeFilterItems
`protected abstract IEnumerable<EncyclopediaFilterGroup> InitializeFilterItems()`

### InitializeSortControllers
`protected abstract IEnumerable<EncyclopediaSortController> InitializeSortControllers()`

### IsRelevant
`public virtual bool IsRelevant() `

### HasIdentifierType
`public bool HasIdentifierType(Type identifierType) `

### GetIdentifier
`public string GetIdentifier(Type identifierType) `

### GetIdentifierNames
`public string[] GetIdentifierNames() `

### IsFiltered
`public bool IsFiltered(object o) `

### GetViewFullyQualifiedName
`public virtual string GetViewFullyQualifiedName() `

### GetStringID
`public virtual string GetStringID() `

### GetName
`public virtual TextObject GetName() `

### GetObject
`public virtual MBObjectBase GetObject(string typeName,string stringID) `

### IsValidEncyclopediaItem
`public virtual bool IsValidEncyclopediaItem(object o) `

### GetDescriptionText
`public virtual TextObject GetDescriptionText() `

### GetListItems
`public IEnumerable<EncyclopediaListItem> GetListItems() `

### GetFilterItems
`public IEnumerable<EncyclopediaFilterGroup> GetFilterItems() `

### GetSortControllers
`public IEnumerable<EncyclopediaSortController> GetSortControllers() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
