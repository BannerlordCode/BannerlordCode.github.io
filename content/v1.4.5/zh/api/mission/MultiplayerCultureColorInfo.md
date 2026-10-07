---
title: "MultiplayerCultureColorInfo"
description: "多人对战一方的全部配色：6 组颜色各存一份 Color 与一份 uint，而 swapColors 一个布尔决定这 6 组全部左右互换——同文化对战时守方才换色。"
---

# MultiplayerCultureColorInfo

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Multiplayer`（嵌套在 `MultiplayerBattleColors` 内）
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public readonly struct MultiplayerCultureColorInfo(BasicCultureObject culture, bool swapColors)`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Multiplayer/MultiplayerBattleColors.cs`

## 概述

`MultiplayerCultureColorInfo` 是 28 行的**只读结构体**，声明在 `MultiplayerBattleColors.cs:10-37`，嵌套在 `public readonly struct MultiplayerBattleColors` 内。它持有 7 个 `public readonly` 字段：1 个文化引用 + **6 组「颜色 + 原始 uint」成对字段**（`Color1`/`Color1Uint`、`Color2`/`Color2Uint`、`ClothingColor1`/`ClothingColor1Uint`、`ClothingColor2`/`ClothingColor2Uint`、`BannerBackgroundColor`/`BannerBackgroundColorUint`、`BannerForegroundColor`/`BannerForegroundColorUint`）。

**为什么要同时存 `Color` 和 `uint`？** 因为 C# 的字段初始化顺序：`:14` 写的是 `Color1 = Color.FromUint(Color1Uint = …)`——**先把 uint 赋值给 `Color1Uint`，再把它转成 `Color` 赋给 `Color1`。** 所以每一对里 uint 是「原料」、Color 是「成品」，**两个字段装的是同一个值但类型不同**（`Color` 供渲染、`uint` 供比较或回传）。

## 心智模型

把它当成**「一方的配色快照」**。三条推论：

第一,**`swapColors` 一次性决定全部 6 组的取哪一边。** `:14`/`:18`/`:22`/`:26`/`:30`/`:34` 六处的模式完全一致：`(!swapColors) ? culture?.Color : culture?.Color2`，也就是 `swapColors == false` 取第一色、`true` 取第二色。**没有「只换衣服不换旗帜」这种细粒度控制——六个字段是一刀切的。**

第二,**同文化对战时只有守方换色。** `GetCultureColors`（`:73-87`）第 83 行算出 `swapColors`：两侧文化的 `StringId` 都非空**且相等**时为 true；然后 `:84` 给攻方传 `swapColors: false`、`:85` 给守方传 `swapColors`。**所以「双方同一个文化」时攻方拿原色、守方拿第二色——这是为了让两方在屏幕上可区分。**

第三,**六组颜色的 null 兜底是 `?? 0`，即全透明黑。** 每处 `culture?.Color` 的 `?.` 与末尾 `?? 0` 配对。**所以文化对象缺某个颜色字段时得到的是 0（透明），不是抛异常也不是回退到另一个字段。**

边界：**`public` 结构体嵌在 `public readonly struct MultiplayerBattleColors` 里 ⇒ 编译期完全可达** —— 这是 mission 桶里少见的、能被 mod 直接用的类型。它的构造器 `MultiplayerCultureColorInfo(BasicCultureObject, bool)` 也是 `public`。

## 如何使用

**怎么拿到它**：**不要自己 new，走工厂。** 公开入口是 `MultiplayerBattleColors.CreateWith(BasicCultureObject, BasicCultureObject)`（`:43`）——它转调私有的 `GetCultureColors`（`:73`），后者会做 null 兜底（`:75-82` 各 culture 为 null 时取 `GetFallbackCulture()`）并自动算 `swapColors`。**直接 `new MultiplayerCultureColorInfo(culture, swapColors)` 会跳过这两件事。**

工厂用法（这条路径能拿到全部自动处理）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.Missions.Multiplayer;

// CreateWith(attackerCulture, defenderCulture) -> GetCultureColors（:45 -> :73）
// 内部：culture 为 null -> GetFallbackCulture()（:75-82）
//       两侧 StringId 相同且非空 -> swapColors = true（:83），只作用于守方（:85）
var colors = MultiplayerBattleColors.CreateWith(null, null);
Debug.Print("attacker culture = " + (colors.AttackerColors.Culture == null ? "null" : colors.AttackerColors.Culture.StringId), 0);
Debug.Print("defender culture = " + (colors.DefenderColors.Culture == null ? "null" : colors.DefenderColors.Culture.StringId), 0);
```

按 peer 取配色（这是它真正的调用场景）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.Missions.Multiplayer;

// GetPeerColors(peer) 的四条分支（:48-71）：
//   :50-53  peer == null                        -> AttackerColors
//   :54-65  两侧文化相同 -> 看 peer.Team.Side   -> 非 Attacker 则 DefenderColors，否则 AttackerColors
//   :66-69  peer.Culture != AttackerColors.Culture -> DefenderColors
//   :70     否则                                 -> AttackerColors
var colors = MultiplayerBattleColors.CreateWith(null, null);
MultiplayerCultureColorInfo mine = colors.GetPeerColors(null);
Debug.Print("null peer -> attacker side = " + mine.Culture.StringId, 0);
Debug.Print("Color1 as uint = " + mine.Color1Uint + "  ClothingColor2 as uint = " + mine.ClothingColor2Uint, 0);
```

**用它最容易踩的一条**：**`swapColors` 不是「反色」，是「取另一个颜色字段」。** `:14`/`:18` 等六处的三元是 `(!swapColors) ? culture?.Color : culture?.Color2` —— **它选的是 `BasicCultureObject` 上的两个不同属性**（`Color` 与 `Color2`），不是对同一个值取反。**所以 `swapColors` 的效果完全取决于你的文化对象有没有正确填 `Color2`。** 文化只填了 `Color` 而 `Color2` 为 null 时，`swapColors: true` 会让全部 6 组颜色变成 `?? 0` 的全透明黑。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Culture` | `public readonly BasicCultureObject Culture = culture` | **这组配色来自哪个文化（`:12`）。** 它是 `GetPeerColors` 全部四条分支的比较基准（`:54` 的 `AttackerColors.Culture == DefenderColors.Culture`、`:66` 的 `peer.Culture != AttackerColors.Culture`）。**颜色字段都从它身上取，所以它是 null 时六组颜色全为 0。** |
| `Color1` / `Color1Uint` | `public readonly Color Color1` / `public readonly uint Color1Uint` | 第一组颜色，**成对存在**（`:14` 与 `:16`）。`:14` 的写法 `Color.FromUint(Color1Uint = …)` **先给 uint 赋值、再转成 Color**，所以 uint 是原料。取值来自 `(!swapColors) ? culture?.Color : culture?.Color2`。 |
| `Color2` / `Color2Uint` | `public readonly Color Color2` / `public readonly uint Color2Uint` | 第二组颜色（`:18`/`:20`）。**与 `Color1` 的差别只是源字段相反**：`:14` 在 `swapColors == false` 时取 `Color`、`:18` 在 `swapColors == true` 时取 `Color`。 |
| `ClothingColor1` / `ClothingColor1Uint` | `public readonly Color ClothingColor1` / `public readonly uint ClothingColor1Uint` | 衣服颜色第一组（`:22`/`:24`）。**取值表达式与 `Color1`/`Color2` 逐字相同**（`(!swapColors) ? culture?.Color : culture?.Color2`）——**而 `BasicCultureObject` 上另有专门的 `ClothAlternativeColor`（`BasicCultureObject.cs:22`）本类没用**，见风险节。 |
| `ClothingColor2` / `ClothingColor2Uint` | `public readonly Color ClothingColor2` / `public readonly uint ClothingColor2Uint` | 衣服颜色第二组（`:26`/`:28`），同样模式。 |
| `BannerBackgroundColor` / `BannerBackgroundColorUint` | `public readonly Color BannerBackgroundColor` / `public readonly uint BannerBackgroundColorUint` | 旗帜底色（`:30`/`:32`）。**源字段不同**：用的是 `culture?.BackgroundColor1` / `culture?.BackgroundColor2`。**只有这两组的取值表达式与前四组不同名。** |
| `BannerForegroundColor` / `BannerForegroundColorUint` | `public readonly Color BannerForegroundColor` / `public readonly uint BannerForegroundColorUint` | 旗帜字色（`:34`/`:36`）。源字段 `culture?.ForegroundColor1` / `culture?.ForegroundColor2`。**与旗帜底色成对。** |
| `MultiplayerCultureColorInfo(BasicCultureObject, bool)` | `public readonly MultiplayerCultureColorInfo(BasicCultureObject culture, bool swapColors)` | 唯一构造器（`:10`）。**没有显式 body**——所有赋值都写在 7 个字段的初始化器里（`:12`、`:14`、`:18`、`:22`、`:26`、`:30`、`:34`）。**`culture` 为 null 不会抛**，六处 `?.` 保证字段全为 `0`/`Color` 的零值。 |

## 真实示例

六组颜色的来源对照（这是本类唯一需要记住的表）：

```csharp
// :14  Color1                <- (!swapColors) ? culture?.Color            : culture?.Color2
// :18  Color2                <- (!swapColors) ? culture?.Color2           : culture?.Color
// :22  ClothingColor1        <- (!swapColors) ? culture?.Color            : culture?.Color2   （与 Color1 同源）
// :26  ClothingColor2        <- (!swapColors) ? culture?.Color2           : culture?.Color
// :30  BannerBackgroundColor <- (!swapColors) ? culture?.BackgroundColor1 : culture?.BackgroundColor2
// :34  BannerForegroundColor <- (!swapColors) ? culture?.ForegroundColor1 : culture?.ForegroundColor2
Debug.Print("服装色与旗帜色的源字段名不同；服装两组的表达式与 Color1/Color2 逐字相同", 0);
```

`swapColors` 的效果（用 `GetCultureColors` 的判定复现）：

```csharp
// :83  swapColors = !IsNullOrEmpty(attacker.StringId) && !IsNullOrEmpty(defender.StringId)
//                     && attacker.StringId == defender.StringId;
// :84  new MultiplayerCultureColorInfo(attackerCulture, swapColors: false)   ← 攻方永远 false
// :85  new MultiplayerCultureColorInfo(defenderCulture, swapColors)           ← 守方才可能 true
Debug.Print("同 StringId 时只有守方换色，攻方恒 swapColors:false", 0);
```

## 风险与边界

- **服装色读的是 `Color`/`Color2`，不是 `ClothAlternativeColor`。** `BasicCultureObject.cs:22` 与 `:24` 确实声明了 `ClothAlternativeColor` / `ClothAlternativeColor2`（`:49-50` 从 XML 属性 `cloth_alternative_color1` / `cloth_alternative_color2` 读入，缺省 `uint.MaxValue`），**但 `MultiplayerCultureColorInfo.cs:22` 与 `:26` 取的是 `culture?.Color` / `culture?.Color2`。** 而且 `grep -rn ClothAlternativeColor` 在整个 1.4.5 源码树下**只命中 `BasicCultureObject.cs` 自己的声明与两行赋值** —— **这两个属性没有任何消费点。** 所以本类的 `ClothingColor1`/`ClothingColor2` 在当前版本里与 `Color1`/`Color2` 是**同一个值的两个名字**。**我不断言这是 bug 还是有意为之**，只陈述「专门的服装色字段存在但没人读，且本类没读它」。
- **`?? 0` 的兜底是全透明黑，不是抛异常。** 六处 `?.` 后的 `?? 0`。**文化缺字段 = 那组颜色透明。**
- **`swapColors` 是「选另一个字段」不是「反色」。** 见「如何使用」。
- **直接 new 会跳过两件事。** 工厂 `CreateWith`（`:43`）里的 null 兜底（`:75-82`）与 `swapColors` 自动判定（`:83`）**在构造器里都没有**。**手写 `new` 必须自己算 `swapColors`。**
- **`GetFallbackCulture` 可能返回 null。** `:92` 的 `FirstOrDefault()` 在列表非空时不会返回 null，但 `:96` 的 `FailedAssert` 之后 `:97` `return null` —— **无文化对象时 `CreateWith(null, null)` 会让两侧 `Culture` 都是 null**，六组颜色全 0。
- **`Color` 与 `uint` 双份存储。** 每组两个字段装同一个值。**内存占用是「看起来」的两倍，且两者的写入顺序依赖字段初始化器的求值顺序**（`:14` 那个嵌套赋值就是证据）。
- **`GetPeerColors` 在 `peer != null` 且两侧文化相同时，会读 `peer.Team.Side`**（`:56-62`）。**`peer.Team` 为 null 时走 `:64` 返回 `AttackerColors`** —— 也就是说**拿不到队伍就默认当攻方**。
- **`GetPeerColors` 在 `peer.Team.Side == Attacker` 时返回攻方色**（`:62`），**但 `BattleSideEnum` 的两个值之外没有兜底分支**。

## 参见

- 宿主：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Multiplayer/MultiplayerBattleColors.cs` —— `AttackerColors`/`DefenderColors` 字段 `:39`/`:41`、`CreateWith` `:43`、`GetPeerColors` `:48-71`、`GetCultureColors` `:73-87`、`GetFallbackCulture` `:89-98`
- 载荷：[BasicCultureObject](../../core-extra/BasicCultureObject/)（`Color` / `Color2` / `BackgroundColor1` / `BackgroundColor2` / `ForegroundColor1` / `ForegroundColor2` / `StringId`）、[Color](../../core-extra/Color/)（`Color.FromUint` 的返回类型）、`BattleSideEnum`、[MissionPeer](../../mission-ext/MissionPeer/)
- 对象枚举入口：`MBObjectManager.Instance.GetObjectTypeList<BasicCultureObject>()`（`:91`）
- 同桶：[HitType](../HitType/)、[ThumbnailDebugUtility](../ThumbnailDebugUtility/)、[ItemInnerData](../ItemInnerData/)、[ItemList](../ItemList/)、[ScriptingInterfaceBase](../ScriptingInterfaceBase/)
- 桶首页：[mission API 分区](../)