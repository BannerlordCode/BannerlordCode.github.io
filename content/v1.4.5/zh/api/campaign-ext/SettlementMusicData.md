---
title: "SettlementMusicData"
description: "SettlementMusicData 的自动生成类参考。"
---
# SettlementMusicData

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class SettlementMusicData : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Modules.SandBox/SandBox/SandBox.Objects/SettlementMusicData.cs`

## 概述

`SettlementMusicData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `SettlementMusicData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MusicPath` | `public string MusicPath { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |
| `LocationId` | `public string LocationId { get; }` |
| `Tempo` | `public int Tempo { get; }` |

## 主要方法

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 SettlementMusicData 实例
SettlementMusicData settlementMusicData = ...;
settlementMusicData.Deserialize(objectManager, node);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
SettlementMusicData entry = ...;
```

## 参见

- [本区域目录](../)