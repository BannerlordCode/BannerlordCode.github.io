---
title: "GameData"
description: "GameData：TaleWorlds.SaveSystem 的 public 类；公开成员 13 个（方法 6、属性 5、字段 0）。源文件 TaleWorlds.SaveSystem/GameData.cs。"
---
# GameData

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class GameData`
**File:** `TaleWorlds.SaveSystem/GameData.cs`

## 概述

GameData 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/GameData.cs。它是一个 public 类，继承链为 GameData。public/protected 成员共 13 个：6 方法、5 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameData 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录一致，继承链 GameData。成员构成以方法为主（方法 6/13，属性 5/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/GameData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `byte[]Header` | `public byte[]Header` | 属性 |
| `byte[]Strings` | `public byte[]Strings` | 属性 |
| `byte[][]ObjectData` | `public byte[][]ObjectData` | 属性 |
| `byte[][]ContainerData` | `public byte[][]ContainerData` | 属性 |
| `TotalSize` | `public int TotalSize` | 属性 |
| `GameData` | `public GameData(byte[]header, byte[]strings, byte[][]objectData, byte[][]containerData)` | 构造函数 |
| `GameData` | `public GameData()` | 构造函数 |
| `Inspect` | `public void Inspect()` | 方法 |
| `CreateFrom` | `public static GameData CreateFrom(byte[]readBytes)` | 方法 |
| `byte[]GetData` | `public byte[]GetData()` | 方法 |
| `Write` | `public static void Write(BinaryWriter writer, GameData gameData)` | 方法 |
| `Read` | `public static GameData Read(BinaryReader reader)` | 方法 |
| `IsEqualTo` | `public bool IsEqualTo(GameData gameData)` | 方法 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AsyncFileSaveDriver](../AsyncFileSaveDriver)
- [同命名空间 ContainerType](../ContainerType)
- [同命名空间 EntryId](../EntryId)
- [同命名空间 FileDriver](../FileDriver)
