---
title: "Presets"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Presets`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Presets

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**模块:** TaleWorlds.MountAndBlade
**类型:** `public enum Presets`
**领域:** mission-ext

## 概述

`Presets` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `Gender` |
| `1` |
| `FacePresets` |
| `2` |
| `FaceType` |
| `3` |
| `EyePresets` |
| `4` |
| `HairBeardPreset` |
| `5` |
| `HairType` |
| `6` |
| `BeardType` |
| `7` |
| `TaintPresets` |
| `8` |
| `SoundPresets` |
| `9` |
| `TaintType` |
| `10` |
| `Age` |
| `11` |
| `EyeColor` |
| `12` |
| `HairAndBeardColor` |
| `13` |
| `TeethType` |
| `14` |
| `EyebrowType` |
| `15` |

## 使用示例

```csharp
Presets example = Presets.Gender;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
