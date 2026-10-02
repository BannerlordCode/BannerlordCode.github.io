---
title: "ImageIdentifier"
description: "ImageIdentifier：TaleWorlds.Core 的 public 类；公开成员 4 个（方法 1、属性 3、字段 0）。源文件 TaleWorlds.Core/ImageIdentifiers/ImageIdentifier.cs。"
---
# ImageIdentifier

**Namespace:** `TaleWorlds.Core.ImageIdentifiers`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class ImageIdentifier`
**File:** `TaleWorlds.Core/ImageIdentifiers/ImageIdentifier.cs`

## 概述

ImageIdentifier 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/ImageIdentifiers/ImageIdentifier.cs。它是一个 public 类（abstract），继承链为 ImageIdentifier。public/protected 成员共 4 个：1 方法、3 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ImageIdentifier 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录不同（TaleWorlds.Core.ImageIdentifiers），继承链 ImageIdentifier。成员构成以属性为主（属性 3/4，方法 1/4），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/ImageIdentifiers/ImageIdentifier.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public string Id` | 属性 |
| `TextureProviderName` | `public string TextureProviderName` | 属性 |
| `AdditionalArgs` | `public string AdditionalArgs` | 属性 |
| `Equals` | `public bool Equals(ImageIdentifier other)` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerImageIdentifier](../BannerImageIdentifier)
- [同命名空间 CharacterImageIdentifier](../CharacterImageIdentifier)
- [同命名空间 CraftingPieceImageIdentifier](../CraftingPieceImageIdentifier)
- [同命名空间 EmptyImageIdentifier](../EmptyImageIdentifier)
