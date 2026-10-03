---
title: "ArmorMaterialTypes"
description: "护甲材质嵌套枚举：ArmorComponent 内部的 sbyte 底层五档 None/Cloth/Leather/Chainmail/Plate，XML 里大小写敏感解析，直接决定 Agent 的护甲落地声。"
---

# ArmorMaterialTypes

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum ArmorMaterialTypes : sbyte`（嵌套在 [ArmorComponent](../ArmorComponent) 内）
**Base:** `System.Enum`（无 [Flags]，不可位组合）
**File:** `TaleWorlds.Core/ArmorComponent.cs` 第 236–247 行（整个枚举 11 行；宿主文件 338 行 / 13591 字节）

## 概述

`ArmorMaterialTypes` 是一个**嵌套枚举**，声明在 [ArmorComponent](../ArmorComponent) 类体内部，所以它的完整类型名是 `ArmorComponent.ArmorMaterialTypes`，使用处必须写全限定名。五个取值按声明顺序是 `None`、`Cloth`、`Leather`、`Chainmail`、`Plate`，底层类型显式标成 `: sbyte`，数值 0 到 4。

它回答的是「这副护甲是什么材质」，而这个答案只有一个实际用途：**护甲落地/受击的声音**。`TaleWorlds.MountAndBlade/Agent.cs` 里的私有静态方法就是这个映射的全部实现：

```csharp
private static float GetSoundParameterForArmorType(ArmorComponent.ArmorMaterialTypes armorMaterialType)
{
    return (float)armorMaterialType * 0.1f;
}
```

也就是 `None` → 0.0、`Cloth` → 0.1、`Leather` → 0.2、`Chainmail` → 0.3、`Plate` → 0.4。**枚举的声明顺序在这里不是风格问题，它就是声学参数本身。**

## 心智模型

把它当成**「XML 里一个字符串 → 渲染层一个浮点声音参数」的传输编码**就对了。整条链只有四步，中间没有分支、没有查表：

**第一步，XML 解析。** [ArmorComponent](../ArmorComponent).`Deserialize` 里那一行是关键：

```csharp
this.MaterialType = ((node.Attributes["material_type"] != null)
    ? ((ArmorComponent.ArmorMaterialTypes)Enum.Parse(typeof(ArmorComponent.ArmorMaterialTypes), node.Attributes["material_type"].Value))
    : ArmorComponent.ArmorMaterialTypes.None);
```

**`Enum.Parse` 的第三个参数 `ignoreCase` 在这里是缺席的**——调用只传了 `typeof(...)` 和字符串。对比同一段 `Deserialize` 里的 `hair_cover_type`、`beard_cover_type`、`mane_cover_type`、`tail_cover_type`，那四个全传了 `true`。所以 **`material_type` 必须严格写 `"Cloth"` / `"Leather"` / `"Chainmail"` / `"Plate"`，写成小写会抛异常**。

**第二步，缺失即 `None`。** 属性不存在时不是抛错也不是留默认值（`None` 本来就是 0），而是显式赋 `ArmorComponent.ArmorMaterialTypes.None`。所以「没写 `material_type`」和「写了 `material_type="None"`」产出的值完全一样。

**第三步，Agent 视觉创建时采集。** `MissionScreen` 在建完 Agent 视觉后读 `SpawnEquipment[EquipmentIndex.Body].Item.ArmorComponent.MaterialType`，然后 `agent.SetBodyArmorMaterialType(bodyArmorMaterialType)`。另外 [Agent](../../mission/Agent) 还有一个私有 `GetProtectorArmorMaterialOfBone(sbyte boneIndex)`，按骨骼的 `BodyPartType` 映射到 `EquipmentIndex.NumAllWeaponSlots` / `Body` / `Gloves` / `Leg`，返回对应装备的 `ArmorComponent.MaterialType`。

**第四步，声音参数。** `(float)armorMaterialType * 0.1f`——运行时通过 `IMBAgent.SetBodyArmorMaterialType(UIntPtr, ArmorComponent.ArmorMaterialTypes)` 传到 native。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | `None`（0） | 默认值与「未指定」。XML 缺 `material_type` 时显式赋它。声音参数 0.0，也是 [Agent](../../mission/Agent) 三个私有方法在找不到装备时的兜底返回值。 |
| `Cloth` | `Cloth`（1） | 布制护甲。XML 必须写 `"Cloth"`。声音参数 0.1。 |
| `Leather` | `Leather`（2） | 皮甲。XML 必须写 `"Leather"`。声音参数 0.2。 |
| `Chainmail` | `Chainmail`（3） | 锁子甲。XML 必须写 `"Chainmail"`。声音参数 0.3。 |
| `Plate` | `Plate`（4） | 板甲，数值最大。XML 必须写 `"Plate"`。声音参数 0.4。 |

## 真实示例

读一件护甲的材质，并换算成引擎实际用的声音参数（照 [Agent](../../mission/Agent) 的算法）：

```csharp
ItemObject item = MBObjectManager.Instance.GetObject<ItemObject>("northern_heavy_armor");
if (item == null || !item.HasArmorComponent)
{
    Debug.Print("no armor component", 0);
    return;
}

ArmorComponent.ArmorMaterialTypes material = item.ArmorComponent.MaterialType;
Debug.Print("material = " + material + " soundParam = " + (float)material * 0.1f, 0);
```

在任务里给 Agent 换材质（照 `MissionScreen` 第 3326–3332 行的形状；那边直接 `.ArmorComponent.MaterialType`，装备槽非护甲会 NRE）：

```csharp
public static void ApplyArmorMaterial(Agent agent)
{
    ItemObject bodyItem = agent.SpawnEquipment[EquipmentIndex.Body].Item;
    ArmorComponent.ArmorMaterialTypes material = ArmorComponent.ArmorMaterialTypes.None;
    if (bodyItem != null && bodyItem.ArmorComponent != null)
    {
        material = bodyItem.ArmorComponent.MaterialType;
    }
    agent.SetBodyArmorMaterialType(material);
    Debug.Print("applied " + material, 0);
}
```

程序化装配一件带指定材质的护甲（注意属性全是 `private set`，只能走 `Deserialize` 这条官方路径）：

```csharp
// <Armor material_type="Chainmail" body_armor="30" covers_body="true" />
ArmorComponent chainmail = new ArmorComponent(item);
chainmail.Deserialize(MBObjectManager.Instance, armorNode);
Debug.Print("parsed = " + chainmail.MaterialType, 0);
```

大小写敏感性自查（这是本枚举唯一会抛异常的路径，`Enum.Parse` 抛的是 `ArgumentException`）：

```csharp
public static bool TryParseMaterial(string xmlValue, out ArmorComponent.ArmorMaterialTypes result)
{
    try
    {
        result = (ArmorComponent.ArmorMaterialTypes)Enum.Parse(typeof(ArmorComponent.ArmorMaterialTypes), xmlValue);
        return true;
    }
    catch (ArgumentException)
    {
        result = ArmorComponent.ArmorMaterialTypes.None;
        return false;
    }
}
```

## 风险与边界

- **XML 解析大小写敏感，会抛异常。** `Enum.Parse(typeof(...), value)` 没传 `ignoreCase`，`material_type="plate"` 抛 `ArgumentException`，**中断整个 `MBObjectManager` 加载**——不是只跳过这一个物品。这与同段代码里 `hair_cover_type` 等四个忽略大小写的属性形成鲜明对比。
- **嵌套枚举，必须写全限定名。** 类型是 `ArmorComponent.ArmorMaterialTypes`，代码里得写全；`using` 不会把它拉进命名空间。
- **底层类型是 `sbyte`。** `(float)armorMaterialType` 先转 sbyte 再转 float；给 native 传参时也走 sbyte 语义。加成员时数值不能超过 127。
- **声明顺序 = 声音参数。** `Agent.GetSoundParameterForArmorType` 就是 `(float)material * 0.1f`。**在中间插入新成员会移动后面所有值的声音参数**——这是隐式的 ABI 依赖，不是文档承诺。
- **不是 [Flags]。** 不能位组合，也别指望 `None` 能与其它值同存（它就是 0 值本身，`None` 是「材质为无」，不是「材质位为空」）。
- **`None` 缺失即默认。** 不写 `material_type` 与写 `"None"` 无法区分，所以想表达「故意留空」在数据层做不到。
- **改动不受保护。** 五个成员之间任意调换顺序，编译器不报错、加载期不报错，只有游戏里的护甲声音会变。
- **消费方全是私有路径。** `Agent.SetBodyArmorMaterialType` 是公开的，但 `GetProtectorArmorMaterialOfBone` 与 `GetSoundParameterForArmorType` 都是 `private`——你没法在外部直接调用后两者，只能通过 `SetBodyArmorMaterialType` 走 [Agent](../../mission/Agent) 那条路。
- **调用方有 NRE 隐患。** `MissionScreen` 那处与 `Agent.GetProtectorArmorMaterialOfBone` 都会直接 `.ArmorComponent.MaterialType`，装备槽里的物品不是护甲时 `ArmorComponent` 为 null。**自己写类似代码必须先判 `ArmorComponent != null`。**

## 跨版本提示

`ArmorMaterialTypes` 声明在 `TaleWorlds.Core/ArmorComponent.cs` 里，该文件在 `bannerlord-1.3.0/`（338 行 / 13591 字节）、`bannerlord-1.3.15/`（14078 字节）、`bannerlord-1.4.6/` / `bannerlord-1.4.7/` / `bannerlord-1.5.3/`（均 13943 字节）之间行数一致。

**枚举本身跨版本零变化**：五个版本里都是同样的五个成员、同样的 `: sbyte` 底层、同样的声明顺序、同样的第 236–247 行位置（1.3.0 里）。1.3.15 与 1.3.0 的整文件差异全部是反编译产物形态（`node.Attributes["x"]` → `node.Attributes.get_ItemOf("x")`），**没有一行触及枚举成员**。

宿主类的唯一实质变化在 1.4.6：新增 `public bool IsNoSlim` 属性与 XML 属性 `no_slim`。**它与本枚举无关**——`IsNoSlim` 是独立的布尔，不参与材质体系。所以 **1.3 → 1.5 升级，你的护甲材质 XML 不用改任何一行**。

## 依赖关系

- 宿主类型：[ArmorComponent](../ArmorComponent) 声明本嵌套枚举，`MaterialType` 属性的类型就是它，`Deserialize` 里那一行 `Enum.Parse` 是唯一的解析入口
- 唯一解析处：[ItemObject](../ItemObject) 的 `<Armor>` 标签分支调用 `ArmorComponent.Deserialize`，`material_type` 的解析发生在那里
- 运行时消费：[Agent](../../mission/Agent) 的公开 `SetBodyArmorMaterialType`，以及私有 `GetProtectorArmorMaterialOfBone` / `GetSoundParameterForArmorType`（后者即 `(float)material * 0.1f`）
- native 边界：[IMBAgent](../../mission/IMBAgent) 声明 `void SetBodyArmorMaterialType(UIntPtr agentPointer, ArmorComponent.ArmorMaterialTypes bodyArmorMaterialType);`，是托管到原型的最后一跳
- 视觉侧触发：[MissionScreen](../../mission-ext/MissionScreen) 在创建 Agent 视觉后读 `SpawnEquipment[EquipmentIndex.Body].Item.ArmorComponent.MaterialType`
- 落位槽位：[EquipmentIndex](../EquipmentIndex) 决定按骨骼查材质时映射到哪个装备槽
- 桶首页：[core-extra API 分区](../)