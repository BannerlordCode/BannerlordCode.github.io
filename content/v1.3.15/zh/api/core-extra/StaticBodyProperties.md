---
title: "StaticBodyProperties"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StaticBodyProperties`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StaticBodyProperties

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 结构?(

`struct

`)，实?

`ISerializableObject

`
**领域:** 核心数据 Core

## 概述

`StaticBodyProperties

` 是一?512 位（8 × 64 位）的结构体，用于唯一标识角色的身体外观属性（脸型、体型等）。它实现 

`ISerializableObject

` 接口，可被存档系统序列化。在游戏代码中，它作?

`BodyProperties

` 的组成部分，?

`Hero

`、`Agent

` ?

`CharacterObject

` 使用?
每个 

`StaticBodyProperties

` ?8 ?

`ulong

`（`KeyPart1

` ~ 

`KeyPart8

`）组成，可序列化?128 字符的十六进制字符串。该字符串也用于 XML 配置文件（如 

`skeleton_body_properties.xml

`）中定义种族和性别的默认身体属性?
## 心智模型

?

`StaticBodyProperties

` 当作角色?身体指纹"? ?ulong ?512 位，足够唯一标识一个角色的脸部和体型。`FromXmlNode

` ?XML 节点?

`key

` 属性读?128 位十六进制字符串并解析为 8 ?KeyPart。`GetRandomStaticBodyProperties

` 生成随机指纹，用?NPC 生成。`ToString

` 输出 

`key="..."

` 格式，可直接嵌入 XML。两?

`StaticBodyProperties

` 相等当且仅当 8 ?KeyPart 全部相同?
## 主要属?
\| Name \| Signature \| Description \|
\|------\|-----------\|-------------\|
\| 

`KeyPart1

` \| 

`public ulong KeyPart1 { get; }

` \| 身体属性键?1 段（?0-15 位十六进制字符） \|
\| 

`KeyPart2

` \| 

`public ulong KeyPart2 { get; }

` \| 身体属性键?2 段（?16-31 位十六进制字符） \|
\| 

`KeyPart3

` \| 

`public ulong KeyPart3 { get; }

` \| 身体属性键?3 段（?32-47 位十六进制字符） \|
\| 

`KeyPart4

` \| 

`public ulong KeyPart4 { get; }

` \| 身体属性键?4 段（?48-63 位十六进制字符） \|
\| 

`KeyPart5

` \| 

`public ulong KeyPart5 { get; }

` \| 身体属性键?5 段（?64-79 位十六进制字符） \|
\| 

`KeyPart6

` \| 

`public ulong KeyPart6 { get; }

` \| 身体属性键?6 段（?80-95 位十六进制字符） \|
\| 

`KeyPart7

` \| 

`public ulong KeyPart7 { get; }

` \| 身体属性键?7 段（?96-111 位十六进制字符） \|
\| 

`KeyPart8

` \| 

`public ulong KeyPart8 { get; }

` \| 身体属性键?8 段（?112-127 位十六进制字符） \|

## 主要方法

### FromXmlNode

`

`

`csharp
public static bool FromXmlNode(XmlNode node, out StaticBodyProperties staticBodyProperties)
`

`

`

?XML 节点?

`key

` 属性读?128 字符十六进制字符串，解析?

`StaticBodyProperties

`。每 16 个字符对应一?

`KeyPart

`。成功返?

`true

`，格式错误返?

`false

` 并输出默认值?
### GetRandomStaticBodyProperties

`

`

`csharp
public static StaticBodyProperties GetRandomStaticBodyProperties()
`

`

`

生成随机?

`StaticBodyProperties

`，每?

`KeyPart

` 填入随机 

`ulong

` 值。用?NPC 生成时创建唯一的身体属性?
### ToString

`

`

`csharp
public override string ToString()
`

`

`

输出 XML 格式字符?

`key="xxxxxxxx..."

`?28 个十六进制字符），可直接嵌入 XML 配置?
### GetHashCode / Equals

`

`

`csharp
public override int GetHashCode()
public override bool Equals(object obj)
public static bool operator ==(StaticBodyProperties a, StaticBodyProperties b)
public static bool operator !=(StaticBodyProperties a, StaticBodyProperties b)
`

`

`

`GetHashCode

` 使用 FNV-1 哈希算法合并 8 ?KeyPart。`Equals

` ?

`==

` 运算符逐段比较所?KeyPart?
### ISerializableObject 实现

`

`

`csharp
void ISerializableObject.Deserialize(IReader reader)
void ISerializableObject.Serialize(IWriter writer)
`

`

`

存档系统使用的序列化/反序列化方法，按 KeyPart1 ~ KeyPart8 顺序读写?
## 使用示例

`

`

`csharp
using TaleWorlds.Core;
using System.Xml;

// ?XML 读取身体属?XmlDocument doc = new XmlDocument();
doc.Load("body_properties.xml");
XmlNode node = doc.SelectSingleNode("//BodyProperty");
if (StaticBodyProperties.FromXmlNode(node, out StaticBodyProperties bodyProps))
{
    // 成功解析，bodyProps 可用于角色创?    hero.CharacterObject.UpdateBodyProperties(bodyProps, hero.IsFemale);
}

// 生成随机身体属性（用于?NPC?StaticBodyProperties randomBody = StaticBodyProperties.GetRandomStaticBodyProperties();

// 比较两个角色的身体属性是否相?if (hero1.StaticBodyProperties == hero2.StaticBodyProperties)
{
    // 两个角色外观相同
}

// 输出?XML 格式字符?string xmlKey = randomBody.ToString();
// 输出: key="a1b2c3d4e5f6a7b8..."
`

`

`

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
