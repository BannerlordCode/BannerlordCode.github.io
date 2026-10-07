---
title: "ThumbnailDebugUtility"
description: "缩略图调试 id 的拼装工具：一个方法，把「uit」前缀、类型、8 位哈希、后缀拼成字符串，超过 127 字符就截断——而 127 这个上限是它的硬边界。"
---

# ThumbnailDebugUtility

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`
**Module:** `TaleWorlds.MountAndBlade.View`（Modules.Native）
**Type:** `internal static class ThumbnailDebugUtility`
**Base:** 无
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/ThumbnailDebugUtility.cs`

## 概述

`ThumbnailDebugUtility` 是 26 行、1 个方法的静态工具类。它的唯一产物是一串「给缩略图纹理用的 debug id」，格式固定为 `uit_<typeId>_<8位哈希>_<additionalInfo>`。

它调用 `Common.CreateNanoIdFrom(renderId)`（`:10`）拿那段 8 位哈希——那个方法在 `bin/TaleWorlds.Library/TaleWorlds.Library/Common.cs:84`，用 SHA256 算出 32 字节后取前 8 个字符。**所以同一个 `renderId` 永远得到同一串 id，不同 `renderId` 几乎不会碰撞。**

它在 v1.4.5 里有 **3 个真实调用点**：`BannerTextureCreator.cs:97`（`"ban"` + `debugInfo.CreateName()`）、`AvatarThumbnailCache.cs:37`（`"avatar"` + `"byte_array"`）、`:42`（`"avatar"` + `"raw_data"`）。

## 心智模型

把它当成**「一个格式固定、会截断的 id 拼装器」**。三条推论：

第一,**`typeId` 与 `additionalInfo` 是给人看的，`renderId` 的哈希才是身份。** 三个调用点里 `typeId` 分别是 `"ban"` / `"avatar"`，`additionalInfo` 分别是 `debugInfo.CreateName()` / `"byte_array"` / `"raw_data"`。**换句话说前缀只是分组标签，真正的唯一性来自 `:10` 的 SHA256 摘要。**

第二,**127 是硬截断线。** `:20-23`：拼完后 `if (text.Length > 127) text = text.Substring(0, 127);`。**这意味着 `additionalInfo` 过长时会被无声切掉。** `:97` 那个调用点传的是 `debugInfo.CreateName()`——**它的长度不受本方法控制**，所以这是唯一一处可能触发截断的实际用法。

第三,**默认值是空串，不是 null。** `:8` 的 `string additionalInfo = ""`。所以 `:18` 的 `Append(additionalInfo)` 在不传第三参时会追加一个空串，**结果尾部留一个 `_`** —— `uit_ban_<hash>_`。这与「不想要尾部下划线」的直觉相反。

边界：**`internal` 静态类**，编译期不可引用；但它的三个调用点都在 `Modules.Native` 里，**没有对外公开面**。

## 如何使用

**怎么拿到它**：**你拿不到它**——`internal static class`，三个调用点全在引擎内部。但你可以复现它的算法：

```csharp
using System.Security.Cryptography;
using System.Text;

// 复现 ThumbnailDebugUtility.CreateDebugIdFrom 的输出格式（ThumbnailDebugUtility.cs:10-19）
static string CreateNanoIdFrom(string input)
{
    byte[] hash = SHA256.Create().ComputeHash(Encoding.UTF8.GetBytes(input));
    var sb = new StringBuilder(8);
    for (int i = 0; sb.Length < 8 && i < hash.Length; i++) sb.Append(hash[i].ToString("x2"));
    return sb.ToString();
}

static string MakeDebugId(string renderId, string typeId, string additionalInfo = "")
{
    var sb = new StringBuilder();
    sb.Append("uit").Append('_').Append(typeId).Append('_')
      .Append(CreateNanoIdFrom(renderId)).Append('_').Append(additionalInfo);
    string text = sb.ToString();
    return text.Length > 127 ? text.Substring(0, 127) : text;
}

Debug.Print(MakeDebugId("render-1", "ban", "TestName"), 0);        // 三个参数
Debug.Print(MakeDebugId("render-1", "avatar"), 0);                  // 缺省 additionalInfo
```

**用它最容易踩的一条**：**截断发生在最后，所以尾部先被吃掉。** `:22` 的 `Substring(0, 127)` **从开头截**，意味着 `additionalInfo` 的尾部先消失。**若你靠 `additionalInfo` 区分两种缓存模式（引擎确实这么用：`"byte_array"` 与 `"raw_data"`），而传入的名字超过 127-前缀长度的部分恰好落在同一位置，两条记录的 id 就可能相同。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CreateDebugIdFrom` | `internal static string CreateDebugIdFrom(string renderId, string typeId, string additionalInfo = "")` | **本类的全部。** 五步：`:10` 取 `Common.CreateNanoIdFrom(renderId)` 的 8 位摘要 → `:12-18` 按 `uit_` `typeId` `_` 摘要 `_` `additionalInfo` 的顺序 `Append` → `:19` 转字符串 → `:20-23` 超 127 则从开头截断 → `:24` 返回。**`renderId` 为 null 时 `:10` 会在 SHA256 的 `GetBytes` 里抛 `ArgumentNullException`。** |

## 真实示例

三个真实调用点用同样的格式、不同的标签：

```csharp
// BannerTextureCreator.cs:97
//   CreateDebugIdFrom(renderId, "ban", debugInfo.CreateName())
// AvatarThumbnailCache.cs:37
//   CreateDebugIdFrom(thumbnailCreationData.AvatarID, "avatar", "byte_array")
// AvatarThumbnailCache.cs:42
//   CreateDebugIdFrom(thumbnailCreationData.AvatarID, "avatar", "raw_data")
//   ↑ :37 与 :42 只差 additionalInfo（byte_array / raw_data），renderId 同源
//      => 这两条是同一个 Avatar 的两种缓存表示，**靠 additionalInfo 区分**
Debug.Print("avatar 的两种缓存靠 additionalInfo 区分：byte_array / raw_data", 0);
```

缺省参数留下的尾巴：

```csharp
using System.Text;

// 不传 additionalInfo 时：Append(additionalInfo) 追加空串，结果以 '_' 结尾
// ThumbnailDebugUtility.cs:18 是无条件 Append，不是 AppendIfNotEmpty
Debug.Print("uit_ban_<hash>_   <= 末尾有一个下划线（来自 :18 的无条件 Append）", 0);
```

## 风险与边界

- **`internal` 静态类，编译期不可引用。** 三个调用点全在引擎内部，**没有对外公开面**。
- **`renderId` 无 null 检查。** `:10` → `Common.CreateNanoIdFrom` → `Encoding.UTF8.GetBytes(input)`，null 会抛 `ArgumentNullException`。
- **127 截断从开头切。** `:20-23`。**`additionalInfo` 尾部先丢，且无任何告警。**
- **`additionalInfo` 默认空串会留下尾部 `_`。** `:8` + `:18`。**与「不传就不出现」的直觉相反。**
- **同一 `renderId` 恒得同一摘要。** `Common.CreateNanoIdFrom` 用 SHA256（`Common.cs:86`）。**所以两个不同用途若传了同一个 `renderId`，会得到相同摘要；唯一性靠 `typeId` 与 `additionalInfo` 兜。**
- **哈希只取 8 个十六进制字符。** `Common.cs:87` 的 `StringBuilder(8)`。**32 字节摘要截到 8 字符 ⇒ 32 bit，理论上会碰撞。** 我**不断言实际会不会碰撞**，只陈述熵的上界。
- **`CreateNanoIdFrom` 是 `TaleWorlds.Library.Common` 的公开方法**，本类只是它的调用方之一——**别的模块也直接调它**。

## 参见

- 三个调用点：`bannerlord-1.4.5/Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/BannerTextureCreator.cs:97`、`.../Tableaus.Thumbnails/AvatarThumbnailCache.cs:37`、`:42`
- 依赖的哈希函数：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/Common.cs:84`（`CreateNanoIdFrom`，`:86` 用 `SHA256.Create()`、`:87` 用 `StringBuilder(8)`）
- 同桶的「窄类型」对照：[ScriptingInterfaceBase](../ScriptingInterfaceBase/)（7 行、零成员、零消费点 —— 与本类正好相反：本类虽小但有 3 个真实调用点）
- 同桶：[HitType](../HitType/)、[ItemInnerData](../ItemInnerData/)、[ItemList](../ItemList/)、[MultiplayerCultureColorInfo](../MultiplayerCultureColorInfo/)
- 桶首页：[mission API 分区](../)