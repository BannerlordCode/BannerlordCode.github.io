---
title: "MBBoundaryCollection"
description: "MBBoundaryCollection 的自动生成类参考。"
---
# MBBoundaryCollection

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBBoundaryCollection : IDictionary<string,ICollection<Vec2>>,ICollection<KeyValuePair<string,ICollection<Vec2>>>,IEnumerable<KeyValuePair<string,ICollection<Vec2>>>,IEnumerable,INotifyCollectionChanged `
**Base:** IDictionary<string,ICollection<Vec2>>,ICollection<KeyValuePair<string,ICollection<Vec2>>>,IEnumerable<KeyValuePair<string,ICollection<Vec2>>>,IEnumerable,INotifyCollectionChanged
**Source:** TaleWorlds.MountAndBlade/Mission.cs

## 概述

`MBBoundaryCollection` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/Mission.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetEnumerator
`public IEnumerator<KeyValuePair<string,ICollection<Vec2>>> GetEnumerator() `

### GetBoundaryRadius
`public float GetBoundaryRadius(string name) `

### GetOrientedBoundariesBox
`public void GetOrientedBoundariesBox(out Vec2 boxMinimum,out Vec2 boxMaximum,float rotationInRadians = 0f) `

### Add
`public void Add(KeyValuePair<string,ICollection<Vec2>> item) `
`public void Add(string name,ICollection<Vec2> points) `
`public void Add(string name,ICollection<Vec2> points,bool isAllowanceInside) `

### Clear
`public void Clear() `

### Contains
`public bool Contains(KeyValuePair<string,ICollection<Vec2>> item) `

### CopyTo
`public void CopyTo(KeyValuePair<string,ICollection<Vec2>>[] array,int arrayIndex) `

### Remove
`public bool Remove(KeyValuePair<string,ICollection<Vec2>> item) `
`public bool Remove(string name) `

### ContainsKey
`public bool ContainsKey(string name) `

### TryGetValue
`public bool TryGetValue(string name,out ICollection<Vec2> points) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
