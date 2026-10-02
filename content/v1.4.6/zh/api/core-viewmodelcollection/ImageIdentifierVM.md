---
title: "ImageIdentifierVM"
description: "ImageIdentifierVM：TaleWorlds.Core.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 7 个（方法 1、属性 6、字段 0）。源文件 TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ImageIdentifierVM.cs。"
---
# ImageIdentifierVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public abstract class ImageIdentifierVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ImageIdentifierVM.cs`

## 概述

ImageIdentifierVM 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ImageIdentifierVM.cs。它是一个 public 类（abstract），实现/继承 ViewModel，继承链为 ImageIdentifierVM → ViewModel。public/protected 成员共 7 个：1 方法、6 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ImageIdentifierVM 是 TaleWorlds.Core.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.Core.ViewModelCollection.ImageIdentifiers），继承链 ImageIdentifierVM → ViewModel。成员构成以属性为主（属性 6/7，方法 1/7），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ImageIdentifierVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ImageIdentifier` | `protected ImageIdentifier ImageIdentifier` | 属性 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Id` | `public string Id` | 属性 |
| `AdditionalArgs` | `public string AdditionalArgs` | 属性 |
| `TextureProviderName` | `public string TextureProviderName` | 属性 |
| `IsEmpty` | `public bool IsEmpty` | 属性 |
| `IsValid` | `public bool IsValid` | 属性 |

## 参见

- [↑ core-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerImageIdentifierVM](../BannerImageIdentifierVM)
- [同命名空间 CharacterImageIdentifierVM](../CharacterImageIdentifierVM)
- [同命名空间 CraftingPieceImageIdentifierVM](../CraftingPieceImageIdentifierVM)
- [同命名空间 GenericImageIdentifierVM](../GenericImageIdentifierVM)
