---
title: BodyProperties
description: BodyProperties - 角色面部与体型外观的值类型结构体，由静态面部密钥和动态体型参数组?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BodyProperties`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BodyProperties

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** struct（`[Serializable]

`，`[JsonConverter(typeof(BodyPropertiesJsonConverter))]

`?
## 概述

`BodyProperties

` 是角色面部生成和体型外观的核心数据结构。它由两部分组成：`StaticBodyProperties

`? ?

`ulong

` 密钥部分，编码面部骨骼、肤色、毛发等固定特征）和 

`DynamicBodyProperties

`（年龄、体重、体型三?float 参数）。角色创建器生成的外观、存档中保存的角色外观、XML 中定义的 NPC 外观都使用此结构?
该结构支?XML 序列化（

`&lt;BodyProperties age="30" weight="0.5" build="0.5" ... /&gt;

`）、JSON 序列化（通过自定?converter）、字符串解析（`FromString

`）和随机生成（`GetRandomBodyProperties

`，委托给 

`FaceGen

`）?
## 心智模型

?

`BodyProperties

` 想成"角色的基因密?+ 三个体型旋钮"?
**静态密钥（StaticBodyProperties?* ?8 ?

`ulong

`（`KeyPart1

` ?

`KeyPart8

`）编码面部的固定特征。这些密钥由 FaceGen 系统生成和解析，?modder 来说是不透明的——你只需整体保存和传递，不需要理解每?bit 的含义。`KeyPart8

` 的部?bit 位有已知用途（如身高等乘数），?

`ClampHeightMultiplierFaceKey

` 在多人模式下限制范围?
**动态参数（DynamicBodyProperties?* ?

`Age

`（年龄，float）、`Weight

`（体重，0-1）、`Build

`（肌肉度?-1）。这三个参数在运行时可调整，影响角色的体型渲染。默认值为年龄 30、体?0.5、体?0.5?
**XML 格式** ?

`ToString()

` 生成 

`&lt;BodyProperties version="4" age=".." weight=".." build=".." key=".." /&gt;

`。`FromString

` 接受?

`&lt;BodyProperties

` ?

`&lt;BodyPropertiesMax

` 开头的 XML 字符串，解析出动态参数和静态密钥?
**多人模式限制** ?

`ClampForMultiplayer

` 将年龄限制在 22-128、体重和体型固定?0.5，并限制身高乘数?0.25-0.75 范围内，确保多人模式中外观不会过于极端?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`StaticProperties

` \| 

`StaticBodyProperties

` (get) \| 静态面部密钥（8 ?ulong?\|
\| 

`DynamicProperties

` \| 

`DynamicBodyProperties

` (get) \| 动态体型参数（年龄/体重/体型?\|
\| 

`Age

` \| 

`float

` (get) \| 年龄，取?

`DynamicProperties.Age

` \|
\| 

`Weight

` \| 

`float

` (get) \| 体重?-1），取自 

`DynamicProperties.Weight

` \|
\| 

`Build

` \| 

`float

` (get) \| 体型/肌肉度（0-1），取自 

`DynamicProperties.Build

` \|
\| 

`KeyPart1

` ~ 

`KeyPart8

` \| 

`ulong

` (get) \| 静态密钥的 8 个部分，取自 

`StaticProperties

` \|
\| 

`Default

` \| 

`static BodyProperties

` (get) \| 默认外观：年?20、体?0、体?0、全零密?\|

## 主要方法

### BodyProperties (构?
`

`

`csharp
public BodyProperties(DynamicBodyProperties dynamicBodyProperties, StaticBodyProperties staticBodyProperties)
`

`

`
用指定的动态参数和静态密钥构?

`BodyProperties

`?
### FromString (静?
`

`

`csharp
public static bool FromString(string keyValue, out BodyProperties bodyProperties)
`

`

`
?XML 字符串解析。字符串必须?

`&lt;BodyProperties 

` ?

`&lt;BodyPropertiesMax 

` 开头。解?

`age

`/

`weight

`/

`build

` 属性和静态密钥。解析失败返?false ?

`bodyProperties = default

`?
### FromXmlNode (静?
`

`

`csharp
public static bool FromXmlNode(XmlNode node, out BodyProperties bodyProperties)
`

`

`
?XML 节点解析。读?

`age

`（默?30）、`weight

`（默?0.5）、`build

`（默?0.5）属性，委托 

`StaticBodyProperties.FromXmlNode

` 解析密钥?
### GetRandomBodyProperties (静?
`

`

`csharp
public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount = 0f)
`

`

`
委托?

`FaceGen.GetRandomBodyProperties

` 生成随机外观。`bodyPropertiesMin

` / 

`bodyPropertiesMax

` 定义随机范围；`seed

` 控制随机性；

`variationAmount

` 控制与范围中心的偏移量（0 = 严格在范围内）?
### ClampForMultiplayer
`

`

`csharp
public BodyProperties ClampForMultiplayer()
`

`

`
返回适合多人模式的新 

`BodyProperties

`：年龄限制在 22-128，体重和体型固定 0.5，身高乘数限制在 0.25-0.75（超出范围则设为 0.5）?
### ToString
`

`

`csharp
public override string ToString()
`

`

`
生成 XML 格式字符串：

`&lt;BodyProperties version="4" age=".." weight=".." build=".." key=".." /&gt;

`。使?

`MBStringBuilder

` 避免分配?
### operator == / operator !=
`

`

`csharp
public static bool operator ==(BodyProperties a, BodyProperties b)
public static bool operator !=(BodyProperties a, BodyProperties b)
`

`

`
?

`StaticProperties

` ?

`DynamicProperties

` 逐一比较。注?

`==

` 实现有空值检查（struct 不应?null，但反编译代码包含此检查）?
### Equals / GetHashCode
`

`

`csharp
public override bool Equals(object obj)
public override int GetHashCode()
`

`

`
?

`DynamicProperties

` ?

`StaticProperties

` 的默认比较器比较/计算哈希?
## 使用示例

### 示例：从 XML 加载 NPC 外观并随机生成变?
**场景**: mod 中定义了一?NPC，需要从 XML 读取基础外观，然后为不同存档生成有差异的随机外观?
`

`

`csharp
using TaleWorlds.Core;

// XML 中定义的基础外观（在 NPC 模板中）
string xmlBodyProps = "&lt;BodyProperties version=\"4\" age=\"25\" weight=\"0.4\" build=\"0.6\" key=\"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000A50B8C4030000000000000000000000000000000000000000000000000\" /&gt;";

// 解析基础外观
if (BodyProperties.FromString(xmlBodyProps, out BodyProperties baseProps))
{
    // 用基础外观作为范围下限，生成随机外?    BodyProperties randomProps = BodyProperties.GetRandomBodyProperties(
        race: 1,           // 人类
        isFemale: false,
        bodyPropertiesMin: baseProps,
        bodyPropertiesMax: BodyProperties.Default,  // 上限
        hairCoverType: 0,
        seed: RandomSeed,
        hairTags: "",
        beardTags: "",
        tattooTags: "",
        variationAmount: 0.2f  // 20% 随机偏移
    );

    // 应用到角?    hero.ChangeBodyProperties(randomProps, false);
}

// 多人模式中限制外?BodyProperties mpProps = baseProps.ClampForMultiplayer();
`

`

`

**要点**: 

`FromString

` 对格式要求严格——必须以 

`&lt;BodyProperties

` ?

`&lt;BodyPropertiesMax

` 开头，否则返回 false。静态密钥对 modder 不透明，不要手动构造密钥值——用 

`GetRandomBodyProperties

` 或从现有角色读取。`ClampForMultiplayer

` 是必要的，因为极端外观值（如身高过高）在多人同步时会有问题。`ToString()

` 的输出可直接写回 XML 文件。两?

`BodyProperties

` 相等要求静态密钥和动态参数完全一致?
## 参见
- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
