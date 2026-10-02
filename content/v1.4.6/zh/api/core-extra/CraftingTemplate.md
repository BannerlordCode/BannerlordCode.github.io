---
title: "CraftingTemplate"
description: "锻造模板的 XML 数据对象：声明哪些部件类型可装配、按什么顺序拼、每种用法下的属性上限，以及武器的佩挂 mesh 行为。"
---
# CraftingTemplate

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class CraftingTemplate : MBObjectBase`
**Base:** `TaleWorlds.ObjectSystem.MBObjectBase`
**File:** `TaleWorlds.Core/CraftingTemplate.cs`

## 概述

它是一份「图纸」，不是工具类。作为 `MBObjectBase` 的派生类，它由 `MBObjectManager` 从 `crafting_templates` 的 XML 加载，靠 `StringId` 寻址。**全部数据属性都是 `private set`，只有 `Deserialize` 和 `OnLoad` 回调能写**——运行期想改图纸只能改 XML 再重载。

它回答四个问题：**能装什么**（`BuildOrders` 里出现过的 `PieceTypes` 集合，配套 `Pieces` 是零件库）、**怎么装**（`BuildOrders` 的 `PieceData.Order` 符号决定往柄侧还是刃侧累加，0 是握把本身）、**数值上限是多少**（`_statDataValues` 按 `WeaponDescription` 的 usage 分别给出 `CraftingStatTypes` 数组，未填的项是 `float.MinValue`）、**挂身上什么样**（`ItemHolsters` / `ItemHolsterPositionShift` / `UseWeaponAsHolsterMesh` / `AlwaysShowHolsterWithWeapon` / `RotateWeaponInHolster` / `PieceTypeToScaleHolsterWith` / `_hiddenPieceTypesOnHolsteredMesh`）。

## 心智模型

生命周期只有一个阶段：**`Deserialize` 一次填满，之后全程只读**。所以典型用法是「按 id 取出来，问它几个问题」：

1. `CraftingTemplate.GetTemplateFromId("template_two_handed_sword")` 或遍历 `CraftingTemplate.All`；
2. `IsPieceTypeUsable(pieceType)` 判某类部件这个模板支不支持；
3. `new Crafting(template, culture, name)` 之后由 [Crafting](../Crafting) 按 `Pieces` 建候选池。

**最坑的一条：`GetStatDatas` 用 `GetIndexOfUsageDataWithId` 的返回值当数组下标，而后者在找不到时返回 `-1`。** `_statDataValues[usageIndex]` 于是变成 `_statDataValues[-1]`，抛 `IndexOutOfRangeException`。所以**传一个不在 `WeaponDescriptions` 里的 usage id 不是「返回空集」，是崩**。

第二条：**`IsPieceTypeHiddenOnHolster` 直接索引 `_hiddenPieceTypesOnHolsteredMesh[(int)pieceType]`，而这个 `bool[4]` 只在 `Deserialize` 里被 `new`。** 手工 `new CraftingTemplate()` 得到的对象上调用它 → `NullReferenceException`。**并且 `PieceTypes.Invalid = -1`，传它进去 → `IndexOutOfRangeException`。**

第三条：`BuildOrders` / `WeaponDescriptions` / `Pieces` 的赋值分散在 `Deserialize` 的 `<PieceDatas>` / `<WeaponDescriptions>` / `<UsablePieces>` 三个分支里，**依赖 XML 里子节点的先后顺序**——`<WeaponDescriptions>` 必须排在 `<StatsData>` 前面，否则 `_statDataValues` 还是 null，`_statDataValues[usageIndex]` 也会炸。改 XML 顺序时留意。

第四条：`GetStatDatas` 会**主动过滤掉伤害/速度类中与传入 `DamageTypes` 不匹配的那几项**：如果 `thrustDamageType == DamageTypes.Invalid`，`ThrustSpeed` 与 `ThrustDamage` 被剔除；`swingDamageType == DamageTypes.Invalid` 时同理剔除 `SwingSpeed` / `SwingDamage`。然后只返回 `_statDataValues[usageIndex][i] >= 0f` 的项（未填的是 `float.MinValue`，自然被滤掉）。**所以「这个模板没有某项属性」和「你传了 `Invalid` 伤害类型」是同一个结果。**

常见误用：`new CraftingTemplate()` 后直接查任何依赖 `Deserialize` 建立的数组；给 `GetStatDatas` 传模板里没有的 usage id；把 `ToString()` 当成 `StringId`（它返回 `TemplateName.ToString()`，是本地化后的显示名，不是 id）。

## 关键成员

### 静态数据（全部 `private set`，只由 `Deserialize` 写）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `BuildOrders` | `public PieceData[] BuildOrders { get; private set; }` | **装配顺序表**，来自 XML 的 `<PieceDatas>`。每项是 `PieceData { PieceType, Order }`：`Order` 的符号（`< 0` 柄侧 / `== 0` 握把 / `> 0` 刃侧）决定 [WeaponDesign](../WeaponDesign) 里往哪个累加器上加。**`WeaponDesign` 的几何计算完全按这张表走。** |
| `WeaponDescriptions` | `public WeaponDescription[] WeaponDescriptions { get; private set; }` | 这个模板支持的**用法**列表（一把剑可以是「刺」「砍」两种 `WeaponDescription`）。`_statDataValues` 的第一维就是它的长度。 |
| `Pieces` | `public List<CraftingPiece> Pieces { get; private set; }` | 可用零件库，来自 `<UsablePieces>`。**[Crafting](../Crafting) 的 `Init()` 按 `PieceType` 给它分桶成 `UsablePiecesList`。** |
| `ItemType` | `public ItemObject.ItemTypeEnum ItemType { get; private set; }` | 从 XML 的 `item_type` 属性 `Enum.Parse` 出来的物品大类。 |
| `ItemHolsters` | `public string[] ItemHolsters { get; private set; }` | 槽位到 body 的映射，按 `:` 切分。 |
| `ItemHolsterPositionShift` | `public Vec3 ItemHolsterPositionShift { get; private set; }` | 默认佩戴位置偏移，`Vec3.Parse` 读入。参与 [WeaponDesign](../WeaponDesign) 的 `HolsterShiftAmount` 计算。 |
| `UseWeaponAsHolsterMesh` | `public bool UseWeaponAsHolsterMesh { get; private set; }` | 是否拿武器自己的 mesh 当佩挂 mesh。 |
| `AlwaysShowHolsterWithWeapon` | `public bool AlwaysShowHolsterWithWeapon { get; private set; }` | 带武器时是否仍显示鞘/背带。 |
| `RotateWeaponInHolster` | `public bool RotateWeaponInHolster { get; private set; }` | 插在鞘里是否旋转。 |
| `PieceTypeToScaleHolsterWith` | `public CraftingPiece.PieceTypes PieceTypeToScaleHolsterWith { get; private set; }` | 拿哪一类零件的长度去缩放鞘的 mesh。XML 未写时是 `PieceTypes.Invalid`。 |
| `TemplateName` | `public TextObject TemplateName;` | **公开字段**（不是属性）。`Deserialize` 末尾 `GameTexts.FindText("str_crafting_template", StringId)` 填。 |

### 查询

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `All` | `public static MBReadOnlyList<CraftingTemplate> All { get; }` | 全部已加载模板，`MBObjectManager.Instance.GetObjectTypeList<CraftingTemplate>()`。**`MBObjectManager.Instance` 为 null 时 NRE。** |
| `GetTemplateFromId` | `public static CraftingTemplate GetTemplateFromId(string templateId)` | 按 `StringId` 取模板。没 id 返回 null。 |
| `IsPieceTypeUsable` | `public bool IsPieceTypeUsable(CraftingPiece.PieceTypes pieceType)` | `BuildOrders.Any(bO => bO.PieceType == pieceType)`。**`BuildOrders` 为 null（未 `Deserialize`）时 NRE。** 这是判断「这个模板支不支持某零件」的标准入口。 |
| `GetIndexOfUsageDataWithId` | `public int GetIndexOfUsageDataWithId(string weaponDescriptionId)` | 在 `WeaponDescriptions` 里线性查 `StringId`，**找不到返回 `-1`**。这个 `-1` 是 `GetStatDatas` 崩掉的根因。 |
| `IsPieceTypeHiddenOnHolster` | `public bool IsPieceTypeHiddenOnHolster(CraftingPiece.PieceTypes pieceType)` | 读 `_hiddenPieceTypesOnHolsteredMesh[(int)pieceType]`。**数组只在 `Deserialize` 里 `new bool[4]`；传 `PieceTypes.Invalid`（值为 -1）→ 越界。** |
| `GetStatDatas` | `public IEnumerable<KeyValuePair<CraftingTemplate.CraftingStatTypes, float>> GetStatDatas(string weaponDescriptionId, DamageTypes thrustDamageType, DamageTypes swingDamageType)` | 惰性枚举该 usage 下的属性上限。**先按 `Invalid` 伤害类型剔掉对应的四项，再滤掉 `< 0f` 的项。`weaponDescriptionId` 不存在 → `_statDataValues[-1]` → `IndexOutOfRangeException`。** |
| `ToString` | `public override string ToString()` | 返回 `TemplateName.ToString()`，**不是 `StringId`**。日志里看到的是本地化显示名。 |

### 构造与加载

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public CraftingTemplate()` | 无参，只 `Pieces = new List<CraftingPiece>()`。**其余数据属性全 null，`IsPieceTypeUsable` / `IsPieceTypeHiddenOnHolster` / `GetStatDatas` 都不能用。** [CraftingPiece](../CraftingPiece) 的 `Deserialize` 在 `<CraftingTemplates>` 分支里靠它 `objectManager.RegisterPresumedObject<CraftingTemplate>(...)` 建交叉引用。 |
| `.ctor` | `public CraftingTemplate(string stringId)` | 同上再加 `base(stringId)`。 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 解析 `modifier_group` / `item_type` / `item_holsters` / `default_item_holster_position_offset` / `use_weapon_as_holster_mesh` / `always_show_holster_with_weapon` / `rotate_weapon_in_holster` / `piece_type_to_scale_holster_with` / `hidden_piece_types_on_holster`，以及四个子节点 `<PieceDatas>` / `<WeaponDescriptions>` / `<UsablePieces>` / `<StatsData>`。**`<WeaponDescriptions>` 必须在 `<StatsData>` 之前，否则 `_statDataValues` 为 null。** |
| `OnLoad` | `[LoadInitializationCallback] private void OnLoad(MetaData metaData)` | 读档时保证 `Pieces` 非 null（为 null 就补一个空 `List`）。**只保 `Pieces`，不保 `BuildOrders`。** |
| `CraftingStatTypes` | `public enum CraftingStatTypes` | 12 个值：`Weight` / `WeaponReach` / `ThrustSpeed` / `SwingSpeed` / `ThrustDamage` / `SwingDamage` / `Handling` / `MissileDamage` / `MissileSpeed` / `Accuracy` / `StackAmount` / `NumStatTypes`。`NumStatTypes` 是哨兵。XML 里未填的项写 `float.MinValue`。 |

## 真实示例

按 id 取模板并问它支不支持某类零件：

```csharp
CraftingTemplate template = CraftingTemplate.GetTemplateFromId("template_two_handed_sword");
if (template == null)
{
    Debug.Print("template not loaded", 0);
    return;
}

Debug.Print("name=" + template.ToString() + " itemType=" + template.ItemType, 0);
Debug.Print("blade=" + template.IsPieceTypeUsable(CraftingPiece.PieceTypes.Blade), 0);
Debug.Print("pommel=" + template.IsPieceTypeUsable(CraftingPiece.PieceTypes.Pommel), 0);
```

枚举该 usage 下的属性上限（注意 usage id 必须存在）：

```csharp
CraftingTemplate template = CraftingTemplate.GetTemplateFromId("template_two_handed_sword");

int usageIndex = template.GetIndexOfUsageDataWithId("two_handed_sword");
if (usageIndex >= 0)
{
    foreach (KeyValuePair<CraftingTemplate.CraftingStatTypes, float> stat in
             template.GetStatDatas("two_handed_sword", DamageTypes.Blunt, DamageTypes.Blunt))
    {
        Debug.Print(stat.Key + " max=" + stat.Value, 0);
    }
}
else
{
    Debug.Print("unknown usage id, do NOT call GetStatDatas", 0);
}
```

传 `DamageTypes.Invalid` 看哪些属性被过滤掉：

```csharp
CraftingTemplate template = CraftingTemplate.GetTemplateFromId("template_two_handed_sword");

// 传 Invalid：ThrustSpeed / ThrustDamage / SwingSpeed / SwingDamage 会被剔除
foreach (KeyValuePair<CraftingTemplate.CraftingStatTypes, float> stat in
         template.GetStatDatas("two_handed_sword", DamageTypes.Invalid, DamageTypes.Invalid))
{
    Debug.Print("kept " + stat.Key + " = " + stat.Value, 0);
}
```

遍历全部模板、按佩挂规则过滤：

```csharp
foreach (CraftingTemplate template in CraftingTemplate.All)
{
    bool hideBlade = template.IsPieceTypeHiddenOnHolster(CraftingPiece.PieceTypes.Blade);
    bool rotateInHolster = template.RotateWeaponInHolster;
    Debug.Print(template.StringId + " hideBlade=" + hideBlade + " rotate=" + rotateInHolster, 0);
}
```

按 `BuildOrders` 自己拼一遍装配顺序（对照 [WeaponDesign](../WeaponDesign) 的几何规则）：

```csharp
CraftingTemplate template = CraftingTemplate.GetTemplateFromId("template_two_handed_sword");

foreach (PieceData order in template.BuildOrders)
{
    Debug.Print("piece=" + order.PieceType + " side=" + order.Order, 0);
}

foreach (CraftingPiece piece in template.Pieces)
{
    if (template.IsPieceTypeUsable(piece.PieceType))
    {
        Debug.Print(piece.Name + " tier=" + piece.PieceTier + " cost=" + piece.CraftingCost, 0);
    }
}
```

## 风险与边界

- **全部数据属性 `private set`。** 运行期无法改图纸；要改得动 XML 或重新加载。
- **`GetStatDatas` 传未知 usage id 会抛异常。** `GetIndexOfUsageDataWithId` 返回 `-1`，`_statDataValues[-1]` 越界。**调用前一定先判 `usageIndex >= 0`。**
- **`IsPieceTypeHiddenOnHolster` 有两个雷。** 未 `Deserialize` 的实例 `_hiddenPieceTypesOnHolsteredMesh` 为 null → NRE；传 `PieceTypes.Invalid`（-1）→ 负下标越界。
- **`IsPieceTypeUsable` 依赖 `BuildOrders`。** `new CraftingTemplate()` 出来的对象 `BuildOrders` 是 null → NRE。
- **XML 子节点顺序有依赖。** `<WeaponDescriptions>` 必须先于 `<StatsData>`，否则 `_statDataValues` 为 null。
- **`OnLoad` 只保 `Pieces`。** 读档路径不会重建 `BuildOrders`，它靠存档系统从 `Deserialize` 的解析结果恢复。**读档早期的 `BasicCharacterObject` / `Crafting` 快照上不要假设 `BuildOrders` 已就绪。**
- **`GetStatDatas` 会按 `Invalid` 伤害类型静默剔除四项。** 想看全量就别传 `Invalid`，改传实际伤害类型。
- **`ToString()` 返回 `TemplateName` 不是 `StringId`。** 日志/字典键场景要用 `StringId`。
- **`ItemModifierGroup` 属性存在但本文不链它。** 它从 XML 的 `modifier_group` 属性经 `Game.Current.ObjectManager.GetObject<ItemModifierGroup>(text)` 解析——**`Game.Current` 为 null 时 NRE**。
- **不是存档对象。** 它是 `MBObjectBase`，存档存的是 `StringId` 引用，读档时按 id 重新从 XML 加载。
- **`PieceData.Order` 的符号语义是隐约定。** `< 0` 柄侧、`0` 握把、`> 0` 刃侧，规则只存在于 [WeaponDesign](../WeaponDesign) 的 `CalculatePivotDistances` 里，写自定义模板时照抄游戏自带的 `<PieceDatas>` 即可，别自己发明。

## 跨版本提示

`bannerlord-1.3.15/TaleWorlds.Core/CraftingTemplate.cs` 与 `bannerlord-1.4.6/TaleWorlds.Core/CraftingTemplate.cs` 逐行比对，**public 表面完全一致**：24 条 public 成员（11 个 `private set` 数据属性 + `TemplateName` 公开字段 + 两个构造器 + `GetIndexOfUsageDataWithId` / `IsPieceTypeHiddenOnHolster` / `GetStatDatas` / `ToString` / `IsPieceTypeUsable` / `Deserialize` / `All` / `GetTemplateFromId` + 嵌套 `CraftingStatTypes` 枚举的 12 个值）。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/CraftingTemplate.cs`（261 行）与 `bannerlord-1.4.6/TaleWorlds.Core/CraftingTemplate.cs`（351 行）逐成员比对 public/protected 表面。**三版 public/protected 表面完全一致（各 22 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 被消费方：[Crafting](../Crafting) 的 `CurrentCraftingTemplate` 持有它，`Init()` 靠 `Pieces` 建候选池；[WeaponDesign](../WeaponDesign) 的 `CalculatePivotDistances` 遍历它的 `BuildOrders`
- 零件库：[CraftingPiece](../CraftingPiece) 出现在 `Pieces` 里，并通过 `<CraftingTemplates>` 反向 `RegisterPresumedObject` 建交叉引用
- 装载基类：[MBObjectBase](../../campaign-ext/MBObjectBase) 提供 `StringId` 与 `Deserialize` 契约；[MBObjectManager](../../campaign-ext/MBObjectManager) 负责 `GetObjectTypeList` 与 `GetObject`
- 依赖注入时机：解析 `modifier_group` 时用到 [Game](../Game) 的 `Game.Current.ObjectManager`
- 桶首页：[core-extra API 分区](../)