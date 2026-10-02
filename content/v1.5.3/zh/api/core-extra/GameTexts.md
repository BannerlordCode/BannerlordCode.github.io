---
title: "GameTexts"
description: "GameTexts 的自动生成类参考。"
---
# GameTexts

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class GameTexts `
**Base:** System.Object
**Source:** TaleWorlds.Core/GameTexts.cs

## 概述

`GameTexts` 的自动生成类参考页面。声明来自 `TaleWorlds.Core/GameTexts.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Initialize
`public static void Initialize(GameTextManager gameTextManager) `

### FindText
`public static TextObject FindText(string id,string variation = null) `

### TryGetText
`public static bool TryGetText(string id,out TextObject textObject,string variation = null) `

### FindAllTextVariations
`public static IEnumerable<TextObject> FindAllTextVariations(string id) `

### SetVariable
`public static void SetVariable(string variableName,string content) `
`public static void SetVariable(string variableName,float content) `
`public static void SetVariable(string variableName,int content) `
`public static void SetVariable(string variableName,TextObject content) `

### ClearInstance
`public static void ClearInstance() `

### AddGameTextWithVariation
`public static GameTexts.GameTextHelper AddGameTextWithVariation(string id) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
