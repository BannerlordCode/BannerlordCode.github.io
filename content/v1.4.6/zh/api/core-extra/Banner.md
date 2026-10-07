---
title: "Banner"
description: "旗号数据容器：有序的 BannerData 列表（0 号是背景、1 号起是图标），支持序列化/反序列化、随机生成与颜色轮换。"
---
# Banner

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class Banner`
**Base:** `System.Object`
**File:** `TaleWorlds.Core/Banner.cs`

## 概述

旗号在数据结构上是**一个有序的 `BannerData` 列表**，索引 0 固定是背景（`BackgroundDataIndex`），从 1 开始是图标（`BannerIconDataIndex`），最多 `MaxIconCount = 32` 个图标。序列化格式是点号分隔的扁平串，每 10 个字段一段：`MeshId.ColorId.ColorId2.SizeX.SizeY.PositionX.PositionY.DrawStroke.Mirror.Rotation`，段间用 `.` 分隔。

三条关键设计：

- **`_bannerCode` 是缓存。** 每次修改（改颜色、加图标、旋转……）都先 `_bannerCode = null`；读 `BannerCode` 时若为 null 则 `Serialize()` 重算并缓存。
- **`_bannerVisual` 也是懒缓存。** `BannerVisual` getter 在 `_bannerVisual == null` 时调 `Game.Current.CreateBannerVisual(this)`。`Deserialize` 会把 `_bannerVisual` 置 null 强制重建。
- **`[SaveableField(1)] _bannerDataList`** —— 旗号**是要进存档的**，图标数据随存档保存。

`GetVersionNo()` 把所有元素的 `LocalVersion` 求和，这是官方的「旗号是否需要重新生成视觉」判据。

## 心智模型

典型流程有三条：

1. **从 XML / 存档代码恢复**：`new Banner(bannerKey)` → `Deserialize(code)` → `TryGetBannerDataFromCode` 切出 `List<BannerData>`。空 key 会 `Debug.FailedAssert("Banner key is empty!")` 并**直接 return，留下空列表**。
2. **造新的旗号**：`CreateRandomClanBanner(seed)` / `CreateRandomBanner()` / `CreateOneColoredEmptyBanner(colorIndex)` / `CreateOneColoredBannerWithOneIcon(bg, icon, meshId)`。注意这些**都先往索引 0 放背景数据**，再放图标——所以 `ClearAllIcons()` 保留第 0 项。
3. **改外观**：`ChangePrimaryColor` / `ChangeBackgroundColor` / `ChangeIconColors` / `SetIconSize` / `RotateBackgroundToLeft|Right` / `AddIconData` / `RemoveIconDataAtIndex`。

**最坑的一条是索引 0 与 1 的语义被硬编码进了方法体**：`ClearAllIcons()` 直接 `this._bannerDataList[0]`，`SetIconSize` 直接 `this._bannerDataList[1].Size`，`ChangeIconColors` 从 `i = 1` 循环。**对一个空 `Banner`（`new Banner()`）调这些方法会 `ArgumentOutOfRangeException`。** 无参构造器只 `new MBList<BannerData>()`，**不填背景**。要直接 `new Banner()` 然后改颜色，必须先 `AddIconData(背景数据)`。

第二条：**所有颜色修改都用 `BannerManager.GetColorId(uint)` 查表，查不到就 `return`，静默不改。** `ChangePrimaryColor` 里 `colorId < 0` 直接返回。所以传一个不在调色板里的颜色**什么都不会发生且不报错**。

第三条：`AddIconData(BannerData)` 的上限检查是 `if (this._bannerDataList.Count < 33) { this._bannerCode = null; }` —— 只在**未超 33 时**清缓存，**超了也照样 Add**（那个 `Add` 在 if 外面）。`MaxIconCount` 是 32，这里比的是 33（含背景）。所以第 34 个图标能被加进去，只是缓存不失效 → `BannerCode` 会返回**过期的**串。

第四条：`Deserialize` 之后 `_bannerCode = message`（**不校验 message 合法性**），只有 `TryGetBannerDataFromCode` 成功才填充列表。失败的结果是「代码字符串是坏的，列表是空的」——两个字段不一致。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public Banner()` | 只 `new MBList<BannerData>()`。**索引 0 没有背景数据**，此时调 `ClearAllIcons()` / `SetIconSize` / `ChangeIconColors` 会越界。 |
| `.ctor` | `public Banner(Banner banner)` | 复制构造。`_bannerCode` 直接沿用源对象的缓存串；`BannerData` 逐个 `new BannerData(bannerData)` 拷贝。**`_bannerVisual` 不拷贝**（保持 null 懒建）。 |
| `.ctor` | `public Banner(Banner banner, uint color1, uint color2)` | 复制后调 `ChangePrimaryColor(color1)` + `ChangeIconColors(color2)`。 |
| `.ctor` | `public Banner(string bannerKey)` | `Deserialize(bannerKey)`。**key 为 null/空时 `Debug.FailedAssert("Banner key is empty!")` 并 return，留下空列表**（不是异常）。 |
| `.ctor` | `public Banner(string bannerKey, uint color1, uint color2)` | 上面的构造 + 改主色与图标色。 |
| `BannerCode` | `public string BannerCode { get; }` | 懒缓存的序列化串。`_bannerCode == null` 时就地 `Serialize()` 并写回缓存。**任何漏掉的修改路径都会让这里返回过期值。** |
| `BannerDataList` | `public MBReadOnlyList<BannerData> BannerDataList { get; }` | 只读视图，**返回内部 `MBList` 的包装不是副本**。索引 0 是背景。 |
| `BannerVisual` | `public IBannerVisual BannerVisual { get; }` | 懒加载的视觉对象。`_bannerVisual == null` 时调 `Game.Current.CreateBannerVisual(this)` 并缓存。**`Game.Current` 为 null 会 NRE**；`CreateBannerVisual` 在 `BannerVisualCreator` 为 null 时返回 null，于是每次访问都重试。 |
| `SetBannerVisual` | `public void SetBannerVisual(IBannerVisual visual)` | 注入自定义视觉实现（mod 换旗号渲染）。传 null 会退回懒加载路径。 |
| `GetBannerDataAtIndex` | `public BannerData GetBannerDataAtIndex(int index)` | **每次调用都 `_bannerCode = null`**（即使 index 越界也先清缓存），然后 `Count <= index` 时返回 null，否则返回 `List[index]`。负数下标不校验，抛 `ArgumentOutOfRangeException`。 |
| `GetBannerDataListCount` | `public int GetBannerDataListCount()` | 列表长度。 |
| `IsBannerDataListEmpty` | `public bool IsBannerDataListEmpty()` | `Count == 0`。 |
| `GetPrimaryColorId` / `GetSecondaryColorId` / `GetIconColorId` | `public int GetPrimaryColorId()` / `GetSecondaryColorId()` / `GetIconColorId()` | 分别读 `[0].ColorId` / `[0].ColorId2` / `[1].ColorId`。**前两个索引 0，第三个索引 1——空列表或单元素列表会越界。** |
| `GetIconSize` | `public Vec2 GetIconSize()` | 读 `[1].Size`。索引 1 越界风险。 |
| `SetPrimaryColorId` | `public void SetPrimaryColorId(int colorId)` | 直接写 `[0].ColorId` 并清缓存。**不做 `BannerManager` 查表校验**，与 `ChangePrimaryColor` 不同。 |
| `SetSecondaryColorId` | `public void SetSecondaryColorId(int colorId)` | 写 `[0].ColorId2` + 清缓存。 |
| `SetIconColorId` | `public void SetIconColorId(int colorId)` | 写 `[1].ColorId` + 清缓存。注意 `ChangeIconColors` 写的是 `ColorId` 和 `ColorId2` 两个字段，本方法只写一个。 |
| `SetIconSize` | `public void SetIconSize(int newSize)` | 写 `[1].Size = new Vec2(newSize, newSize)`。索引 1 越界风险。 |
| `ChangePrimaryColor` | `public void ChangePrimaryColor(uint mainColor)` | `BannerManager.GetColorId(mainColor)` 转成 id，**`colorId < 0` 直接 return（静默不改）**；否则把 `[0].ColorId` 和 `[0].ColorId2` **都**设成同一值并清缓存。 |
| `ChangeBackgroundColor` | `public void ChangeBackgroundColor(uint primaryColor, uint secondaryColor)` | 两个颜色都要能查到 id，否则**任一为负就整个 return**。成功则分别写 `[0].ColorId` / `[0].ColorId2`。 |
| `ChangeIconColors` | `public void ChangeIconColors(uint color)` | id 查不到就 return；成功则对 `i = 1` 到末尾**每个图标**同时写 `ColorId` 与 `ColorId2`。 |
| `RotateBackgroundToRight` / `RotateBackgroundToLeft` | `public void RotateBackgroundToRight()` / `RotateBackgroundToLeft()` | 改 `[0].RotationValue`，步长 1/360（`0.0027777778f`），带 0–1 回绕。左右方向相反。 |
| `GetBackgroundMeshId` / `GetIconMeshId` | `public int GetBackgroundMeshId()` / `GetIconMeshId()` | 读 `[0].MeshId` / `[1].MeshId`。 |
| `SetBackgroundMeshId` / `SetIconMeshId` | `public void SetBackgroundMeshId(int meshId)` / `SetIconMeshId(int meshId)` | 写 `[0].MeshId` / `[1].MeshId` + 清缓存。 |
| `Serialize` | `public string Serialize()` | 转发 `Banner.GetBannerCodeFromBannerDataList(this._bannerDataList)`。**不写回 `_bannerCode` 缓存**。 |
| `Deserialize` | `public void Deserialize(string message)` | `_bannerCode = message`（**不校验**）、`_bannerVisual = null`（强制重建视觉）、`_bannerDataList.Clear()`，然后 `TryGetBannerDataFromCode` 成功才 `AddRange`。**失败时「代码字段是坏的、列表是空的」——两个字段不一致。** |
| `ClearAllIcons` | `public void ClearAllIcons()` | 取出 `[0]` 背景项 → `Clear()` 整个列表 → 把背景项放回去。**列表为空时 `[0]` 直接越界。** |
| `AddIconData` | `public void AddIconData(BannerData iconData)` | `if (Count < 33) { _bannerCode = null; }` **然后无条件 Add**。超限时缓存不失效 → `BannerCode` 返回过期串。上限语义是「背景 + 32 图标」。 |
| `AddIconData` | `public void AddIconData(BannerData iconData, int index)` | 指定插入位置版本，同样只在 `Count < 33` 时清缓存。 |
| `RemoveIconDataAtIndex` | `public void RemoveIconDataAtIndex(int index)` | 删除指定位置的元素并清缓存。**不校验 index、不禁止删掉索引 0 的背景。** |
| `CreateRandomClanBanner` | `public static Banner CreateRandomClanBanner(int seed = -1)` | 随机旗号，图标布局强制 `BannerIconOrientation.CentralPositionedOneIcon`（给氏族用）。`seed` 传 -1 时用无种子的 `MBFastRandom`。 |
| `CreateRandomBanner` | `public static Banner CreateRandomBanner()` | `CreateRandomBannerInternal(-1, BannerIconOrientation.None)`，布局由 `random.Next(6)` 随机决定。 |
| `CreateOneColoredEmptyBanner` | `public static Banner CreateOneColoredEmptyBanner(int colorIndex)` | 随机背景 id + 指定颜色，**只放背景不放图标**。 |
| `CreateOneColoredBannerWithOneIcon` | `public static Banner CreateOneColoredBannerWithOneIcon(uint backgroundColor, uint iconColor, int iconMeshId)` | 在上一条基础上加一个图标。**`iconMeshId == -1` 时随机取一个。** 背景/图标颜色都经 `BannerManager.GetColorId` 转换，**查不到就传 -1 进去**（不校验）。 |
| `GetPrimaryColor` | `public uint GetPrimaryColor()` | `BannerManager.GetColor([0].ColorId)`；**列表为空时返回 `uint.MaxValue`**。 |
| `GetSecondaryColor` | `public uint GetSecondaryColor()` | 同上读 `ColorId2`。 |
| `GetFirstIconColor` | `public uint GetFirstIconColor()` | `BannerManager.GetColor([1].ColorId)`；**`Count <= 1` 时返回 `uint.MaxValue`**。 |
| `GetVersionNo` | `public int GetVersionNo()` | 把所有 `BannerData.LocalVersion` 求和。官方用它判断视觉是否需要重建。 |
| `GetBannerCodeFromBannerDataList` | `public static string GetBannerCodeFromBannerDataList(MBList<BannerData> bannerDataList)` | 真正的序列化实现。段间 `.`，字段内也是 `.`，共 10 字段/段；`RotationValue` 存的是 `RotationValue / 0.0027777778f` 的整数（放大 360 倍）。参数为 null 会 NRE。 |
| `IsValidBannerCode` | `public static bool IsValidBannerCode(string bannerCode)` | 非空 且 `TryGetBannerDataFromCode` 成功。 |
| `TryGetBannerDataFromCode` | `public static bool TryGetBannerDataFromCode(string bannerCode, out List<BannerData> bannerDataList)` | 按 `.` 切分，**每 10 个字段解一段**，尾部不足 10 段的余数字段被忽略。`out` 列表总是 new 的（非 null），失败时是空列表。 |
| `MaxSize` / `BannerFullSize` / `BannerEditableAreaSize` / `MaxIconCount` | `public const int MaxSize = 8000` / `BannerFullSize = 1528` / `BannerEditableAreaSize = 512` / `MaxIconCount = 32` | 尺寸与数量上限常量。`CreateRandomBannerInternal` 里构造背景数据时用的是字面量 `1528f` / `764f` 而不是这些常量。 |
| `BackgroundDataIndex` / `BannerIconDataIndex` | `public const int BackgroundDataIndex = 0` / `BannerIconDataIndex = 1` | 索引语义常量，**但方法体里大量地方直接写死 `0` 和 `1` 而不是用它们**。 |

## 怎么用

### 怎么拿到它

`Banner` 是 `public class Banner`（`TaleWorlds.Core/Banner.cs:10`），**不继承 `MBObjectBase`**——它不是 XML 对象，而是挂在 `Clan.Banner` / `Hero.BannerItem` 这类宿主上的一个纯值对象。四个公开构造器：`Banner()`（`:53`）、`Banner(Banner banner)`（`:59`）、`Banner(Banner banner, uint color1, uint color2)`（`:70`）、`Banner(string bannerKey)`（`:78`）与 `Banner(string bannerKey, uint color1, uint color2)`（`:90`）。

现成的实例有两个来源：

- **`public static Banner CreateRandomClanBanner(int seed = -1)`**（`:324`）和 `CreateRandomBanner()`（`:330`）——建新家族的旗帜。
- **序列化码**：`public string Serialize()`（`:268`）/ `Deserialize(string message)`（`:274`）/ `static string GetBannerCodeFromBannerDataList(MBList<BannerData>)`（`:569`）/ `static bool IsValidBannerCode(string)`（`:605`）/ `static bool TryGetBannerDataFromCode(string, out List<BannerData>)`（`:612`）。`TryGet...` 用 `out` 返回值表示成功与否，mod 之间传旗帜就用这条路。

尺寸常量是公开的：`MaxSize = 8000`（`:664`）、`BannerFullSize = 1528`（`:667`）、`BannerEditableAreaSize = 512`（`:670`）、`MaxIconCount = 32`（`:673`）、`BackgroundDataIndex = 0`（`:679`）、`BannerIconDataIndex = 1`（`:682`）。

### 典型用法

```csharp
using TaleWorlds.Core;
using System.Collections.Generic;

// 给新家族配一面随机旗帜
Banner flag = Banner.CreateRandomClanBanner();            // Banner.cs:324
Clan myClan = Clan.CreateClan("my_mod_rebels");            // CampaignSystem/Clan.cs:1041
myClan.Banner = flag;

// 改配色（Change* 系列直接写颜色值；Set*Id 系列走颜色表索引）
flag.ChangePrimaryColor(0xA02020u);                        // :179
flag.ChangeBackgroundColor(0x204080u, 0xF0F0F0u);          // :192
flag.ChangeIconColors(0xFFC000u);                          // :210
flag.RotateBackgroundToRight();                            // :226

// 图标层：索引 0 恒为背景，1 起是图标，上限 MaxIconCount = 32（:673）
flag.AddIconData(new BannerData(iconMeshId, iconColor, iconColor2,
                               new Vec2(size, size), new Vec2(posX, posY),
                               drawStroke: false, mirror: false, rotationValue: 0f), 1);   // :306
int count = flag.GetBannerDataListCount();                 // :115
BannerData first = flag.GetBannerDataAtIndex(0);           // :104
flag.RemoveIconDataAtIndex(1);                             // :315

// 传给另一个 mod：用序列化码，别直接传引用
string code = flag.Serialize();                             // :268
if (Banner.IsValidBannerCode(code))                        // :605
{
    List<BannerData> parsed;
    Banner.TryGetBannerDataFromCode(code, out parsed);      // :612
    var rebuilt = new Banner(code);                         // :78
}
```

### 最容易踩的坑

**把 `Banner` 当成可自由读写的普通字段对象，直接改 `BannerDataList` 或把一个实例同时挂给两个 `Clan`。** 它没有任何引用计数或拷贝保护：`Banner(Banner banner)`（`:59`）和 `Banner(Banner banner, uint color1, uint color2)`（`:70`）是浅拷贝，而 `MBReadOnlyList<BannerData> BannerDataList`（`:29`）只是**只读视图**——想改内容必须走 `AddIconData` / `RemoveIconDataAtIndex` / `ChangePrimaryColor` 这些会同步维护序列化码的方法。直接拿 `Banner` 引用赋值给两个家族，后调 `ChangeIconColors` 会让两个家族的旗帜一起变；保存时 `Serialize()`（`:268`）读的是 `BannerCode` 字段，所以「引用共享」和「存档里的码」会不一致，读档后表现成旗帜突然变回旧图案。

另一个容易踩的是往图标列表里塞超量数据：`MaxIconCount = 32`（`:673`）是硬上限，`AddIconData(BannerData, int index)`（`:306`）不替你检查，写 33 个图标后 `Serialize()` 出来的码在别处解析会失败，而 `Deserialize` 只在 `IsValidBannerCode`（`:605`）先跑过的情况下才安全。

## 真实示例

从旗号代码恢复并检查有效性（返回值才代表成功）：

```csharp
string code = clan.BannerCode;
if (Banner.IsValidBannerCode(code))
{
    Banner restored = new Banner(code);
    Debug.Print("icons: " + restored.GetBannerDataListCount(), 0);
}
```

造一面新旗号并改色（颜色必须在 `BannerManager` 调色板内，否则静默失败）：

```csharp
Banner banner = Banner.CreateOneColoredEmptyBanner(3);
banner.AddIconData(new BannerData(
    meshId, colorId1, colorId2,
    new Vec2(512f, 512f), new Vec2(764f, 764f),
    false, false, 0f));

banner.ChangePrimaryColor(0xFF0000FF);
banner.ChangeIconColors(0xFF00FF00);

// 只有 ClearAllIcons 之后、ColorId 变化才需要看 visual
banner.SetIconSize(256);

if (banner.GetPrimaryColor() != uint.MaxValue)
{
    Debug.Print("banner ready, version " + banner.GetVersionNo(), 0);
}
```

可复现的随机氏族旗号（固定 seed）：

```csharp
Banner clanBanner = Banner.CreateRandomClanBanner(seed: 20260822);
string stored = clanBanner.BannerCode;     // 触发 Serialize 并缓存

// 存档/读档：直接用 code 重建
Banner reloaded = new Banner(stored);
Debug.Print("reloaded icons: " + reloaded.GetBannerDataListCount(), 0);
```

拆解与重组代码（调试旗号格式时有用）：

```csharp
List<BannerData> parsed;
if (Banner.TryGetBannerDataFromCode(Banner.CreateRandomBanner().BannerCode, out parsed))
{
    for (int i = 0; i < parsed.Count; i++)
    {
        Debug.Print("seg " + i + " mesh " + parsed[i].MeshId, 0);
    }
}
```

## 风险与边界

- **索引 0 / 1 被硬编码进方法体。** `ClearAllIcons`、`SetIconSize`、`GetIconSize`、`SetIconColorId`、`GetIconColorId`、`SetIconMeshId`、`GetIconMeshId` 全部直接下标访问。**`new Banner()` 之后直接调这些会越界**，必须先 `AddIconData(背景)`。
- **颜色查不到静默不改。** `ChangePrimaryColor` / `ChangeBackgroundColor` / `ChangeIconColors` 在 `BannerManager.GetColorId` 返回负数时直接 return，无异常无日志。
- **`AddIconData` 的上限判断与实际添加脱钩。** `Count < 33` 只控制「要不要清缓存」，Add 永远执行。第 34 个图标能进去但缓存不失效 → `BannerCode` 返回过期串。
- **两种颜色写法语义不同。** `SetPrimaryColorId(int)` 直接写 id 不查表；`ChangePrimaryColor(uint)` 查表且同时写 `ColorId` 与 `ColorId2`。混用会得到只改了一半的数据。
- **`Deserialize` 可能造成字段不一致。** 坏代码 → `_bannerCode` 是坏串、`_bannerDataList` 是空列表。两者都「看起来有值」。
- **`Serialize()` 不更新缓存。** 直接调 `Serialize()` 拿结果不会让 `BannerCode` 缓存这个值（`BannerCode` getter 自己会）。
- **`RemoveIconDataAtIndex(0)` 能删掉背景。** 没有保护，之后所有依赖索引 0 的方法全崩。
- **`BannerVisual` 依赖 `Game.Current`。** 早期访问 NRE；`BannerVisualCreator` 为 null 时返回 null 且**每次访问都重试创建**。
- **存档兼容靠格式。** `[SaveableField(1)] _bannerDataList` 进存档，旗号代码串格式（10 字段/段）必须与 `TryGetBannerDataFromCode` 一致。官方改字段数会让旧旗号串解析错位。
- **`GetVersionNo()` 依赖 `BannerData.LocalVersion`。** 那是「这个元素需要重新生成视觉」的累计计数，不是存档版本号。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/Banner.cs` 逐行比对，**public 表面完全一致**：5 个构造器、`BannerCode` / `BannerDataList` / `BannerVisual` 三个属性、`SetBannerVisual`、全部 Get/Set 方法、4 个 `Create*` 静态方法、`GetBannerCodeFromBannerDataList` / `IsValidBannerCode` / `TryGetBannerDataFromCode`、以及 6 个 `const`（`MaxSize` / `BannerFullSize` / `BannerEditableAreaSize` / `MaxIconCount` / `BackgroundDataIndex` / `BannerIconDataIndex`）全都没变。`bannerlord-1.3.15` 里 `AddIconData` 的上限判断同样是 `Count < 33`。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/Banner.cs`（613 行）与 `bannerlord-1.4.6/TaleWorlds.Core/Banner.cs`（718 行）逐成员比对 public/protected 表面。**三版 public 表面完全一致（各 49 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 的 613 行明显短于 1.4.6 的 718 行，差的 105 行**全部是反编译产物**（逐成员 `// Token: … RID: … RVA: …` 注释与 file-scoped→block-scoped namespace 换行），不是代码量差异。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 元素类型：`BannerData`（每段 10 个字段：meshId / 颜色 / 尺寸 / 位置 / 描边 / 镜像 / 旋转）
- 调色板与 mesh：`BannerManager` 提供 `GetColorId` / `GetColor` / `GetRandomColorId` / `GetRandomBackgroundId` / `GetRandomBannerIconId`
- 视觉生成：[Game](../Game) 的 `BannerVisualCreator` / `CreateBannerVisual(Banner)` 产出 `IBannerVisual`
- 存档：`_bannerDataList` 标了 `[SaveableField(1)]`，随 [SaveManager](../../save-system/SaveManager) 落盘
- 桶首页：[core-extra API 分区](../)
