---
title: "SaveEntryExtension"
description: "落盘格式里每条 SaveEntry 的判别字节，标明这条记录是对象头、字段、属性、键值、字符串还是文本。"
---

# SaveEntryExtension

> **一句话职责：** SaveEntryExtension 是一个存进存档文件的字节标记，告诉反序列化器“这条 SaveEntry 里的字节到底代表什么”。

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** SaveSystem
**类型：** `public enum SaveEntryExtension : byte`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/SaveEntryExtension.cs`

## 概述
存档归档是由成千上万条 `SaveEntry` 组成的，反序列化器在读取时只拿到一串字节，必须知道每条字节该按什么规则解释。`SaveEntryExtension` 就是解决这个问题的判别符：它和 `EntryId` 的数字编号一起编码在每条记录里。`Class` 表示这是一个对象的头记录，`Struct` 是结构体，`Field` / `Property` 是普通成员，`Key` / `Value` 是字典的子元素，`String` / `Txt` 是字符串表里的内容，`Config` 是根配置记录，`Basics` / `Object` 则用于基础类型与对象引用的区分。它在 `ArchiveDeserializer.LoadFrom` 里被读成字节并最终还原成这个枚举。

## 心智模型
把它想成“每条纸条的右上角印章”。保存时，对象图遍历到不同种类的节点，系统就盖上不同的印章：`Class` 盖在对象头、`Field` / `Property` 盖在成员、`Key` / `Value` 盖在字典子项、`String` / `Txt` 盖在字符串、`Config` 盖在根配置。读取时 `ArchiveDeserializer` 先读这个字节，再决定调用哪条反序列化路径——对象头走 `ObjectHeaderLoadData`，字段走 `FieldLoadData`，字符串走字符串表解析。因为它是写入磁盘的**稳定格式字节**，所以它的数值顺序就是存档格式的契约：一旦在新版本里插入、重排或复用某个值，旧存档就会按错误的印章去解释字节，导致加载失败或数据错乱。

## 何时用 / 何时不要用
- **不要用：** 这是落盘格式的一部分，modder 不应手动赋值或新增枚举值，否则会破坏旧存档兼容。
- **正确做法：** 让框架用 `[SaveableField]` / `[SaveableProperty]` 自动决定每条记录的类型；只有当你在做底层 `ISaveDriver` 调试、需要确认某条 entry 究竟是什么时才去读取 `entry.Id.Extension`。

## 依赖图
- 上游：[SaveEntry](../SaveEntry)、[EntryId](../EntryId)、[ArchiveDeserializer](../ArchiveDeserializer)
- 下游：[ObjectHeaderLoadData](../ObjectHeaderLoadData)、[FieldLoadData](../FieldLoadData)、[PropertyLoadData](../PropertyLoadData)
- 相关类型/阶段：[SaveManager](../SaveManager)、[ArchiveSerializer](../ArchiveSerializer)

## 风险段
- **兼容性契约：** 枚举值是按字节落盘的。新增/重排成员会让旧 `.sav` 的判别字节指向错误的记录类型，造成静默数据损坏。
- **不要复用语义：** 即使某个值“看起来没用”，也不要改它的含义；反序列化路径和它硬编码绑定。
- **与 SaveFolderExtension 区分：** 这是**条目级**判别符，文件夹级的是 `SaveFolderExtension`，两者不要混淆。

## 成员说明
枚举成员（按落盘字节值从小到大）：
- `Class`：对象头记录。
- `Struct`：结构体记录。
- `Field`：字段成员记录。
- `Property`：属性成员记录。
- `Key`：字典键记录。
- `Value`：字典值记录。
- `String`：字符串表里的字符串记录。
- `Config`：根配置记录（含对象数/字符串数/容器数）。
- `Basics`：基础类型相关记录。
- `Object`：对象引用记录。
- `Txt`：纯文本字符串记录。

读取方式：`entry.Id.Extension` 返回的就是这个枚举值，反序列化器据此分派。

## 示例
```csharp
// SaveEntryExtension 是落盘格式里的判别字节，读取时由 ArchiveDeserializer 据它决定如何解释字节：
SaveOutput output = SaveManager.Save(Game.Current, new MetaData(), "mySlot", new AsyncFileSaveDriver());
// 例如字典键值对会被标记为 Key / Value，纯文本字符串被标记为 Txt：
LoadResult result = SaveManager.Load("mySlot", new AsyncFileSaveDriver());
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[SaveEntry](../SaveEntry)、[EntryId](../EntryId)、[SaveFolderExtension](../SaveFolderExtension)
- 架构：[存档系统架构](../../../architecture/save-system)
