---
title: "PlatformFileHelperPC"
description: "PlatformFileHelperPC: a public class in TaleWorlds.Library, inheriting IPlatformFileHelper; 17 exposed members (16 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/PlatformFileHelperPC.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlatformFileHelperPC

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class PlatformFileHelperPC : IPlatformFileHelper`
**File:** `TaleWorlds.Library/PlatformFileHelperPC.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

PlatformFileHelperPC lives in the TaleWorlds.Library module, source file TaleWorlds.Library/PlatformFileHelperPC.cs. It is a public class, implementing/inheriting IPlatformFileHelper; the inheritance chain is PlatformFileHelperPC → IPlatformFileHelper. It exposes 17 public/protected members: 16 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlatformFileHelperPC lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain PlatformFileHelperPC → IPlatformFileHelper. The surface is method-led (methods 16/17, properties 0/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/PlatformFileHelperPC.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlatformFileHelperPC` | `public PlatformFileHelperPC(string applicationName)` | constructor |
| `SaveFile` | `public SaveResult SaveFile(PlatformFilePath path, byte[]data)` | method |
| `SaveFileString` | `public SaveResult SaveFileString(PlatformFilePath path, string data)` | method |
| `Task` | `public Task<SaveResult>SaveFileAsync(PlatformFilePath path, byte[]data)` | method |
| `Task` | `public Task<SaveResult>SaveFileStringAsync(PlatformFilePath path, string data)` | method |
| `AppendLineToFileString` | `public SaveResult AppendLineToFileString(PlatformFilePath path, string data)` | method |
| `GetFileFullPath` | `public string GetFileFullPath(PlatformFilePath filePath)` | method |
| `FileExists` | `public bool FileExists(PlatformFilePath path)` | method |
| `Task` | `public async Task<string>GetFileContentStringAsync(PlatformFilePath path)` | method |
| `GetFileContentString` | `public string GetFileContentString(PlatformFilePath path)` | method |
| `byte[]GetMetaDataContent` | `public byte[]GetMetaDataContent(PlatformFilePath path)` | method |
| `byte[]GetFileContent` | `public byte[]GetFileContent(PlatformFilePath path)` | method |
| `DeleteFile` | `public bool DeleteFile(PlatformFilePath path)` | method |
| `CreateDirectory` | `public void CreateDirectory(PlatformDirectoryPath path)` | method |
| `PlatformFilePath[]GetFiles` | `public PlatformFilePath[]GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption)` | method |
| `RenameFile` | `public void RenameFile(PlatformFilePath filePath, string newName)` | method |
| `GetError` | `public string GetError()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IPlatformFileHelper](../IPlatformFileHelper/)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
