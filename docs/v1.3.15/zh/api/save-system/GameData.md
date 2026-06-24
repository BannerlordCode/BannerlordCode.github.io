---
title: GameData
description: GameData - 存档文件的二进制数据容器
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameData`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameData
**命名空间:** TaleWorlds.SaveSystem
**模块:** TaleWorlds.SaveSystem
**类型:** class（[Serializable]?
## 概述
`GameData

` 是存档系统的顶层二进制数据容器，将整个存档文件分为四个部分：

`Header

`（头部元数据）、`Strings

`（字符串表）、`ObjectData

`（对象数据数组）、`ContainerData

`（容器数据数组）。每个部分都?

`byte[]

`，对象和容器部分?

`byte[][]

`（多个数据块）?
该类提供 

`CreateFrom

`（从原始字节反序列化）、`GetData

`（序列化为字节）、`Write

`/

`Read

`（通过 BinaryWriter/Reader 流式读写）和 

`IsEqualTo

`（深度字节比较）等方法，是存档文件与 

`LoadContext

` 之间的桥梁?
## 心智模型
?

`GameData

` 看作"存档文件的内存映?。：

`Header

` 包含版本和类型定义信息，

`Strings

` 存储所有字符串以去重，

`ObjectData

` 存储所有序列化对象的二进制块，

`ContainerData

` 存储集合/字典等容器的二进制块?

`TotalSize

` 属性遍历所有部分累加字节长度，用于显示存档大小?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`Header

` \| 

`byte[]

` \| 存档头部元数?\|
\| 

`Strings

` \| 

`byte[]

` \| 字符串表（去重后的所有字符串?\|
\| 

`ObjectData

` \| 

`byte[][]

` \| 对象数据块数?\|
\| 

`ContainerData

` \| 

`byte[][]

` \| 容器数据块数?\|
\| 

`TotalSize

` \| 

`int

` \| 所有数据的总字节数 \|

## 主要方法
### CreateFrom
`

`

`csharp
public static GameData CreateFrom(byte[] readBytes)
`

`

`
从原始字节数组反序列化为 

`GameData

` 实例。依次读?Header 长度+数据、Strings 长度+数据、ObjectData 块数+各块长度+数据、ContainerData 块数+各块长度+数据?
### GetData
`

`

`csharp
public byte[] GetData()
`

`

`
?

`GameData

` 序列化为字节数组。格式与 

`CreateFrom

` 对应：每部分先写长度再写数据?
### Write
`

`

`csharp
public static void Write(BinaryWriter writer, GameData gameData)
`

`

`
?

`GameData

` 写入 

`BinaryWriter

`。注意此方法的写入顺序与 

`GetData

` 不同：Header ?ObjectData ?ContainerData ?Strings?
### Read
`

`

`csharp
public static GameData Read(BinaryReader reader)
`

`

`
?

`BinaryReader

` 读取 

`GameData

`。与 

`Write

` 方法配对，读取顺序为 Header ?ObjectData ?ContainerData ?Strings?
### Inspect
`

`

`csharp
public void Inspect()
`

`

`
将各部分的大小和总大小（MB）打印到调试日志?
### IsEqualTo
`

`

`csharp
public bool IsEqualTo(GameData gameData)
`

`

`
逐字节比较两?

`GameData

` 的四个部分是否完全相同，用于验证存档序列?反序列化的正确性?
## 使用示例
### 示例: 存档文件读写流程
**场景**: 理解存档系统如何将游戏状态持久化
`

`

`csharp
// 存档保存: SaveManager 将游戏对象序列化?GameData，再 GetData() 写入文件
// 存档加载: 从文件读取字节，CreateFrom() 重建 GameData，再交给 LoadContext 反序列化
GameData savedData = GameData.CreateFrom(File.ReadAllBytes(savePath));
savedData.Inspect(); // 打印各部分大?

`

`

`
**要点**: 

`Write

`/

`Read

` ?

`GetData

`/

`CreateFrom

` 的字段顺序不同，不能混用?
## 参见
- [完整类目录](../catalog-save)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
